var connection = require("./connection.js");

var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, burger_name, name) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, burger_name, name], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table, burger_eaten, id) {
        var queryString = "UPDATE ?? SET ? WHERE id= ?";
        connection.query(queryString, [table, burger_eaten, id], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}