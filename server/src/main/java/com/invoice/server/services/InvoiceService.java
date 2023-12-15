package com.invoice.server.services;

import com.invoice.server.dao.InvoiceDao;
import com.invoice.server.model.Invoice;
import org.springframework.stereotype.Service;

import java.util.List;


public interface InvoiceService {
    public Invoice addInvoice(Invoice invoice);
    public List<Invoice> getInvoice();
    public Invoice deleteInvoice(Long id);
}
