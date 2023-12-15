
import Header from "../componenets/Header"
import AddInvoice from "../componenets/AddInvoice";
import { React, useState, useEffect } from "react";
import { getAllInvoice,delteInvoice } from "../services/api";
import Invoices from "../componenets/invoices";
import { Box, Typography, Button } from "@mui/material";


const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false)
    const [invoices, setInvoices] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await getAllInvoice();
            setInvoices(response.data)
            console.log(response)
        }
        getData();
    }, [addInvoice])
    const toggleInvoice = () => {
        setAddInvoice(true)
    }
    const removeInvoice = async (id) => {
        await delteInvoice(id);

        const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
        setInvoices(updatedInvoices);
    }
    return (
        <>
            <Header />
            <Box style={{ margin: 20 }}>
                <Typography variant="h3">
                    Pending invoices
                    {!addInvoice && <Button variant="contained" style={{ margin: 20 }}
                        onClick={() => toggleInvoice()}>Add invoice</Button>}
                </Typography>
            </Box>
            {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
            <Box>
                <Invoices invoices={invoices} removeInvoice={removeInvoice} />
            </Box>

        </>
    );


}

export default Home;