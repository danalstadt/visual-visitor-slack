var express = require('express');
var bodyParser = require('body-parser');
var format = require('string-format');
var request  = require('request');
var _ = require('lodash');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    console.log(req.body);

    var message = format(
        'Someone from {company_name} in {location}, ' +
        'has visited {c_visitor_current_page_request_count} {page_plural} on the site.',
        _(req.body).assign({
            page_plural: parseInt(req.body.c_visitor_current_page_request_count) > 1 ? 'pages' : 'page',
            company_name: req.body.c_visitor_company_domain == 'no domain name found' ?
                req.body.c_visitor_company_name :
                format('<{c_visitor_company_domain}|{c_visitor_company_name}>', req.body),
            location: req.body.c_visitor_company_state ?
                format('{c_visitor_company_city}, {c_visitor_company_state}, {c_visitor_company_country}', req.body) :
                format('{c_visitor_company_city}, {c_visitor_company_country}', req.body)
        }).value()
    );

    request.post({
        url: 'https://hooks.slack.com/services/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',
        body: {
            text: message
        },
        json: true
    });

    res.sendStatus(200);
});

app.listen(process.env.PORT ? process.env.PORT : 8081);