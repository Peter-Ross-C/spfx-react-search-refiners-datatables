var $ = require('jquery');
var dt = require('datatables.net');
do {
    setTimeout(() => {
        console.info(`Loading datatables | ${document.getElementById('#table_id')}`);
        $('#table_id').DataTable();
    }, 20000);
} while (document.getElementById('#table_id') === null);