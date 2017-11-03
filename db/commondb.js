var mysql = require('mysql');
var config = require('./config');
var OperationDay = require('../model/operationday.js');

var con = mysql.createConnection({
    host: config["host"],
    port: config["port"],
    user: config["user"],
    password: config["password"],
    database: config["database"]
});

con.connect(function (error) {
    if (error) {
        console.log("Не удалось подключиться к БД");
    } else {
        console.log("Удалось подключиться к БД");
    }
});

/**
 * Получить историю операций
 * @param {string} loginUser - логин пользователя
 * @param {function} функция, отправляющая историю операций пользователя
 */
function getAllHistory(loginUser, callback) {
    // Начинаем транзакцию 
    con.beginTransaction(function (error) {
        if (error) { throw error; }
        var sql = "SELECT o.idOperation, o.type, o.date, o.productAmount,"
            + "o.honeyCount, o.honeyPots, o.idProductType,o.comission "
            + "FROM operation o LEFT OUTER JOIN deal d "
            + "ON o.idOperation = d.idOperation where loginUser= " + mysql.escape(loginUser);

        con.query(sql, function (error, result, fields) {

            if (error) {
                callback(null);
                return con.rollback(function () { console.error(error.message); });
            } else {
                con.commit(function (error) {
                    callback(result);
                    if (error) return con.rollback(function () { console.error(error.message); });
                });
            }
        });
    });
}
/**
 * Получить операции прошедшие в текущий день
 * @param {string} loginUser - логин пользователя
 * @param {function} функция, отправляющая список операций
 */
function getTodaysOperations(loginUser, callback) {
}
module.exports.getTodaysOperations = getTodaysOperations;
module.exports.getAllHistory = getAllHistory;