import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import { Avatar, Box, Chip, Container, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { ticketProductsApi } from '../../../../api/ticketProducts';
import { useMounted } from '../../../../hooks/use-mounted';
import { usePageView } from '../../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../../layouts/dashboard';
import { paths } from '../../../../paths';
import { TicketProductEditForm } from '../../../../sections/dashboard/ticketProduct/ticketProduct-edit-form';
import { getInitials } from '../../../../utils/get-initials';

const useTicketProduct = () => {
  const router = useRouter();
  const { ticketProductId } = router.query;
  const isMounted = useMounted();
  const [ticketProduct, setTicketProduct] = useState(null);

  const getTicketProduct = useCallback(async () => {
    try {
      let response;
      if(ticketProductId){
        response = await ticketProductsApi.getTicketProduct(ticketProductId);
      }

      if (isMounted()) {
        setTicketProduct(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getTicketProduct();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return ticketProduct;
};

const Page = () => {
  const ticketProduct = useTicketProduct();

  usePageView();

  if (!ticketProduct) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Dashboard: Ticket Product Edit | Devias Kit PRO
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <Stack spacing={4}>
              <div>
                <Link
                  color="text.primary"
                  component={NextLink}
                  href={paths.dashboard.ticketProducts.index}
                  sx={{
                    alignItems: 'center',
                    display: 'inline-flex'
                  }}
                  underline="hover"
                >
                  <SvgIcon sx={{ mr: 1 }}>
                    <ArrowLeftIcon />
                  </SvgIcon>
                  <Typography variant="subtitle2">
                    Ticket Products
                  </Typography>
                </Link>
              </div>
              <Stack
                alignItems="flex-start"
                direction={{
                  xs: 'column',
                  md: 'row'
                }}
                justifyContent="space-between"
                spacing={4}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Avatar
                    src={ticketProduct.image}
                    sx={{
                      height: 64,
                      width: 64
                    }}
                  >
                    {getInitials(ticketProduct.name)}
                  </Avatar>
                  <Stack spacing={1}>
                    <Typography variant="h4">
                      {ticketProduct.name}
                    </Typography>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <Typography variant="subtitle2">
                        id:
                      </Typography>
                      <Chip
                        label={ticketProduct.id}
                        size="small"
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <TicketProductEditForm ticketProduct={ticketProduct} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
