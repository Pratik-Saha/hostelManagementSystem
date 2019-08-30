var sql = require("mssql");

    // config for your database
    var config = {
        user: 'adminuser',
        password: 'pwd@@123',
        server: 'sqldbservertraining.database.windows.net', 
        database: 'sqldbtraining',
        encrypt : true
    };

    
    // connect to your database
    const connection = sql.connect(config, function (err){
        if(err){
            console.log(err);
        }
        else{
            console.log('Connected to Database');
        }
    });

    module.exports = {
        sql, connection
    };
