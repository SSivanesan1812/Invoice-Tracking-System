import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledTable = styled(Table)({
  margin: 20,
  marginTop: 40,
  width: '80%',
  '& > thead > tr > th': {
      background: '#000',
      color: '#FFFFFF',
      fontSize: 18
  },
  '& > tbody > tr > td': {
      fontSize: 16
  },
  '& > tbody > p': {
      fontSize: 18,
      marginTop: 15
  }
})

const Invoices = ({ invoices,removeInvoice }) => {
    return(
    <StyledTable>
  
    <TableHead>
      <TableRow>
        <TableCell>Vendor</TableCell>
        <TableCell>Product</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Date</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {invoices && Array.isArray(invoices) && invoices.length>0?invoices.map((invoice) => (
        <TableRow key={invoice.id}>
          <TableCell>{invoice.vendor}</TableCell>
          <TableCell>{invoice.product}</TableCell>
          <TableCell>{invoice.amount}</TableCell>
          <TableCell>{invoice.date}</TableCell>
          <TableCell>{invoice.status}</TableCell>
          <TableCell>
            <Button
              variant="contained" 
              color="success"
              onClick={()=>removeInvoice(invoice.id)}
            >
              Mark Done
            </Button>
          </TableCell>
        </TableRow>
      )):<Typography>
        No invoice to display</Typography>}
    </TableBody>
  
  </StyledTable>
);}

export default Invoices;
