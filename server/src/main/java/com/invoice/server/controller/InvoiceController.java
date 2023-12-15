package com.invoice.server.controller;

import com.invoice.server.model.Invoice;
import com.invoice.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {
    @Autowired
    InvoiceService invoiceservice;
    @PostMapping("/invoice")
    public Invoice addInvoive(@RequestBody Invoice invoice){
        return this.invoiceservice.addInvoice(invoice);
    }
    @GetMapping("/invoice")
    public List<Invoice> getInvoice(){
        return this.invoiceservice.getInvoice();
    }
    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice delteInvoice(@PathVariable String invoiceId){
        return this.invoiceservice.deleteInvoice(Long.parseLong(invoiceId));
    }
}
