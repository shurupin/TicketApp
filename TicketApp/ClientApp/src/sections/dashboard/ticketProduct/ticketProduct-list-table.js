import { useCallback, useEffect, useMemo, useState } from 'react';
import NextLink from 'next/link';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import moment from 'moment';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import { Avatar, Box, Button, Checkbox, IconButton, Link, Stack, SvgIcon, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import { paths } from '../../../paths';
import { getInitials } from '../../../utils/get-initials';

const useSelectionModel = (ticketProducts) => {
  const ticketProductIds = useMemo(() => {
    return ticketProducts.map((ticketProduct) => ticketProduct.id);
  }, [ticketProducts]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected([]);
  }, [ticketProductIds]);

  const selectOne = useCallback((ticketProductId) => {
    setSelected((prevState) => [...prevState, ticketProductId]);
  }, []);

  const deselectOne = useCallback((ticketProductId) => {
    setSelected((prevState) => {
      return prevState.filter((id) => id !== ticketProductId);
    });
  }, []);

  const selectAll = useCallback(() => {
    setSelected([...ticketProductIds]);
  }, [ticketProductIds]);

  const deselectAll = useCallback(() => {
    setSelected([]);
  }, []);

  return {
    deselectAll,
    deselectOne,
    selectAll,
    selectOne,
    selected,
  };
};

export const TicketProductListTable = (props) => {
  const { ticketProducts, ticketProductsCount, onPageChange, onRowsPerPageChange, page, rowsPerPage, ...other } = props;
  const { deselectAll, selectAll, deselectOne, selectOne, selected } = useSelectionModel(ticketProducts);

  const handleToggleAll = useCallback(
    (event) => {
      const { checked } = event.target;

      if (checked) {
        selectAll();
      } else {
        deselectAll();
      }
    },
    [selectAll, deselectAll]
  );

  const selectedAll = selected.length === ticketProducts.length;
  const selectedSome = selected.length > 0 && selected.length < ticketProducts.length;
  const enableBulkActions = selected.length > 0;

  return (
    <Box sx={{ position: 'relative' }} {...other}>
      {enableBulkActions && (
        <Stack
          direction='row'
          spacing={2}
          sx={{
            alignItems: 'center',
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50'),
            display: enableBulkActions ? 'flex' : 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            px: 2,
            py: 0.5,
            zIndex: 10,
          }}
        >
          <Checkbox checked={selectedAll} indeterminate={selectedSome} onChange={handleToggleAll} />
          <Button color='inherit' size='small'>
            Delete
          </Button>
          <Button color='inherit' size='small'>
            Edit
          </Button>
        </Stack>
      )}
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox checked={selectedAll} indeterminate={selectedSome} onChange={handleToggleAll} />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketProducts.map((ticketProduct) => {
              const isSelected = selected.includes(ticketProduct.id);
              const category = ticketProduct.category;
              const price = numeral(ticketProduct.price).format(`${ticketProduct.currency}0,0.00`);
              const updatedAt = moment(ticketProduct.updatedAt).format("DD.MM.YYYY hh:mm:ss");

              return (
                <TableRow hover key={ticketProduct.id} selected={isSelected}>
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        const { checked } = event.target;

                        if (checked) {
                          selectOne(ticketProduct.id);
                        } else {
                          deselectOne(ticketProduct.id);
                        }
                      }}
                      value={isSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack alignItems='center' direction='row' spacing={1}>
                      <Avatar
                        src={ticketProduct.image}
                        sx={{
                          height: 42,
                          width: 42,
                        }}
                      >
                        {getInitials(ticketProduct.name)}
                      </Avatar>
                      <div>
                        <Link color='inherit' component={NextLink} href={paths.dashboard.ticketProducts.details.replace(":ticketProductId", ticketProduct.id)} variant='subtitle2'>
                          {ticketProduct.name}
                        </Link>
                        <Typography color='text.secondary' variant='body2'>
                          {ticketProduct.status}
                        </Typography>
                      </div>
                    </Stack>
                  </TableCell>
                  <TableCell>{category}</TableCell>
                  <TableCell>{updatedAt}</TableCell>
                  <TableCell>
                    <Typography variant='subtitle2'>{price}</Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <IconButton component={NextLink} href={paths.dashboard.ticketProducts.edit.replace(":ticketProductId", ticketProduct.id)}>
                      <SvgIcon>
                        <Edit02Icon />
                      </SvgIcon>
                    </IconButton>
                    <IconButton component={NextLink} href={paths.dashboard.ticketProducts.details.replace(":ticketProductId", ticketProduct.id)}>
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination component='div' count={ticketProductsCount} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} page={page} rowsPerPage={rowsPerPage} rowsPerPageOptions={[5, 10, 25]} />
    </Box>
  );
};

TicketProductListTable.propTypes = {
  ticketProducts: PropTypes.array.isRequired,
  ticketProductsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
