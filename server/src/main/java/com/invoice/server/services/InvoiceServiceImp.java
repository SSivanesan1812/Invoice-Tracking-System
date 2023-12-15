package com.invoice.server.services;

import com.invoice.server.dao.InvoiceDao;
import com.invoice.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class InvoiceServiceImp implements InvoiceService {

    @Autowired
    InvoiceDao invoicedao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoicedao.save(invoice);
        return invoice;

    }

    @Override
    public List<Invoice> getInvoice() {

        return invoicedao.findAll();
    }

    @Override
    public Invoice deleteInvoice(Long id) {
        Invoice invoice =invoicedao.findById(id).get();
        invoicedao.delete(invoice);
        return invoice;
    }
}
