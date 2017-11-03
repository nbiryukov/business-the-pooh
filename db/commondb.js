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
    // Начинаем транзакцию 
    con.beginTransaction(function (error) {
        if (error) { throw error; }
        // Опеределить временные рамки текущего операционного дня с помощью класса OperationDay
        var opDay = new OperationDay(new Date());
        // Сделать выборку из БД всех операций за текущий день
        var sql = "SELECT o.idOperation, o.type, o.date, o.productAmount,"
            + "o.honeyCount, o.honeyPots, o.idProductType,o.comission "
            + "FROM operation o LEFT OUTER JOIN deal d "
            + "ON o.idOperation = d.idOperation where loginUser= " + mysql.escape(loginUser)
            + "AND o.date BETWEEN \'" + opDay.startDay.toLocaleString() + "\' AND \'" + opDay.endDay.toLocaleString() + "\'";
        console.log(sql);
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
 * Снять мед с счета пользователя
 * @param {string} login - логин пользователя
 * @param {double} honey - количество мёда для снятия
 * @param {function} функция, отправляющая полученный баланс
 */
function withdrawUserHoney(login, honey, callback) {
    // Начинаем транзакцию 
    con.beginTransaction(function (error) {
        if (error) { throw error; }
        // Обновить поле с количеством меда пользователя
        var sql = "UPDATE user SET honeyAmount=honeyAmount-" + honey + " "
            + "WHERE login = " + mysql.escape(login);
        console.log(sql);

        con.query(sql, function (error, result, fields) {

            if (error) {
                callback(null);
                return con.rollback(function () { console.error(error.message); });
            } else {
                con.commit(function (error) {
                    if (error) return con.rollback(function () { console.error(error.message); });
                });
                callback(result);
            }
        });
    });
}
module.exports.withdrawUserHoney = withdrawUserHoney;
module.exports.getTodaysOperations = getTodaysOperations;
module.exports.getAllHistory = getAllHistory;