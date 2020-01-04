const MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'
let connection

module.exports = function () {
    return new Promise((resolve, reject) => {
        if (connection)
            resolve(connection)
        MongoClient.connect(url, (err, client) => {
            if (err)
                reject(err)
            connection = client.db("corporate");
            resolve(connection)
        })
    })
}