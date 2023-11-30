import NextLink from 'next/link';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Button, Card, CardContent, CardHeader, Divider, Stack, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { paths } from '../../../paths';
import { wait } from '../../../utils/wait';
import { ticketProductsApi } from '../../../api/ticketProducts';

export const TicketProductEditForm = (props) => {
  const { ticketProduct, ...other } = props;
  const formik = useFormik({
    initialValues: {
      image: ticketProduct.image || '',
      sku: ticketProduct.sku || '',
      category: ticketProduct.category || '',
      name: ticketProduct.name || '',
      hasDiscount: ticketProduct.hasDiscount || false,
      inStock: ticketProduct.inStock || false,
      isAvailable: ticketProduct.isAvailable || false,
      status: ticketProduct.status || '',
      currency: ticketProduct.currency || '',
      submit: null,
    },
    validationSchema: Yup.object({
      image: Yup.string().max(500),
      sku: Yup.string().max(255),
      category: Yup.string().max(255),
      hasDiscount: Yup.bool(),
      inStock: Yup.bool(),
      inStock: Yup.bool(),
      name: Yup.string().max(255).required('Name is required'),
      status: Yup.string().max(15),
      currency: Yup.string().max(255),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const ticketProductToUpdate = { ...ticketProduct, ...values };
        const { data } = await ticketProductsApi.updateTicketProduct(ticketProductToUpdate);
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        toast.success('Ticket Product updated');
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} {...other}>
      <Card>
        <CardHeader title='Edit Ticket Product' />
        <CardContent sx={{ pt: 0 }}>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField
                error={!!(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label='Name'
                name='name'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.name}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                error={!!(formik.touched.category && formik.errors.category)}
                fullWidth
                helperText={formik.touched.category && formik.errors.category}
                label='Category'
                name='category'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                error={!!(formik.touched.currency && formik.errors.currency)}
                fullWidth
                helperText={formik.touched.currency && formik.errors.currency}
                label='Currency'
                name='currency'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.currency}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                error={!!(formik.touched.image && formik.errors.image)}
                fullWidth
                helperText={formik.touched.image && formik.errors.image}
                label='Image'
                name='image'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.image}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField error={!!(formik.touched.sku && formik.errors.sku)} fullWidth helperText={formik.touched.sku && formik.errors.sku} label='SKU' name='sku' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.sku} />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                error={!!(formik.touched.status && formik.errors.status)}
                fullWidth
                helperText={formik.touched.status && formik.errors.status}
                label='Status'
                name='status'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.status}
              />
            </Grid>
          </Grid>
          <Stack divider={<Divider />} spacing={3} sx={{ mt: 3 }}>
            <Stack alignItems='center' direction='row' justifyContent='space-between' spacing={3}>
              <Stack spacing={1}>
                <Typography gutterBottom variant='subtitle1'>
                  Is In Stock?
                </Typography>
                <Typography color='text.secondary' variant='body2'>
                  Means that the product is in stock
                </Typography>
              </Stack>
              <Switch checked={formik.values.inStock} color='primary' edge='start' name='inStock' onChange={formik.handleChange} value={formik.values.inStock} />
            </Stack>
            <Stack alignItems='center' direction='row' justifyContent='space-between' spacing={3}>
              <Stack spacing={1}>
                <Typography gutterBottom variant='subtitle1'>
                  Is Available?
                </Typography>
                <Typography color='text.secondary' variant='body2'>
                  Means that the product is available
                </Typography>
              </Stack>
              <Switch checked={formik.values.isAvailable} color='primary' edge='start' name='isAvailable' onChange={formik.handleChange} value={formik.values.isAvailable} />
            </Stack>
          </Stack>
        </CardContent>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          flexWrap='wrap'
          spacing={3}
          sx={{ p: 3 }}
        >
          <Button disabled={formik.isSubmitting} type='submit' variant='contained'>
            Update
          </Button>
          <Button color='inherit' component={NextLink} disabled={formik.isSubmitting} href={paths.dashboard.ticketProducts.details.replace(':ticketProductId', ticketProduct.id)}>
            Cancel
          </Button>
        </Stack>
      </Card>
    </form>
  );
};

TicketProductEditForm.propTypes = {
  // @ts-ignore
  ticketProduct: PropTypes.object.isRequired,
};
