import { Box,Button, TextField, Typography ,styled} from "@mui/material"
import { React,useState } from "react"
import { saveInvoice } from "../services/api"

const Component=styled(Box)({
    marginTop:20,
    '& > p':{
        marginBottom:20
    },
    '& > div > div':{
        marginRight:20

    }

})

const defaultObj={vendor:"",
                    product:"",
                amount:0,
                date:"",
                status:"pending"
            }

const AddInvoice=({setAddInvoice})=>{

    const [invoice,setInvoice]=useState(defaultObj)
    const onValueChange=(e)=>{
        setInvoice({...invoice,[e.target.name]:e.target.value});
    }
    const addInvoiceValue=async()=>{
        await saveInvoice({...invoice,amount:Number(invoice['amount'])});
        setAddInvoice(false);   
    
    }



    return(
        <Component>

        <Typography>Add Invoice</Typography>
        <Box>
        
        <TextField 
        variant="standard"
        placeholder="Enter Vendor name"
        name="vendor"
        onChange={(e)=>onValueChange(e)}>
        
        </TextField>

        <TextField 
        variant="standard"
        placeholder="Enter Product name"
        name="product"
        onChange={(e)=>onValueChange(e)}>
        
        </TextField>

        <TextField 
        variant="standard"
        placeholder="Enter amount(in RS)"
        type="number"
        name="amount"
        onChange={(e)=>onValueChange(e)}>
        
        </TextField>

        <TextField 
        variant="standard"
        placeholder="Enter date "
        type="date"
        name="date"
        onChange={(e)=>onValueChange(e)}>
        
        </TextField>

        <Button variant="contained"
        onClick={()=>addInvoiceValue()}>
            Add invoice
        </Button>

        
        </Box>
        </Component>
    )
}

export default AddInvoice