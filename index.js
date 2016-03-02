var express = require('express');
var bodyParser = require('body-parser');
var format = require('string-format');
var _ = require('lodash');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    console.log(req.body);

    var message = format(
        'Someone from <{c_visitor_company_domain}|{c_visitor_company_name}> ' +
        'in {c_visitor_company_city}, {c_visitor_company_state}, {c_visitor_company_country} ' +
        'has visited {c_visitor_current_page_request_count} {page_plural} on the site.',
        _(req.body).clone().assign({
            page_plural: parseInt(req.body.c_visitor_current_page_request_count) > 1 ? 'pages' : 'page'
        }).value()
    );

    console.log(message);
});

app.listen(process.env.PORT ? process.env.PORT : 8081);