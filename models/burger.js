var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, name, cb) {
        orm.insertOne("burgers", burger_name, name, function(res) {
            cb(res);
        });
    },
    updateOne: function(burger_eaten, id, cb) {
        orm.updateOne("burgers", burger_eaten, id, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;