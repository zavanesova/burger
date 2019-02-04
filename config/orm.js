var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, burger_name, name, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, burger_name, name], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, burger_eaten, id, cb) {
        var queryString = "UPDATE ?? SET ? WHERE id= ?";
        connection.query(queryString, [table, burger_eaten, id], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;