const express = require('express');
const router =express.Router();
const con = require('./connection.js');
const path = require('path');

router.use('/public', express.static(path.join(__dirname,'static')));

var request = new con.sql.Request();

router.get('/start',function(req,res){
    res.sendFile(path.join(__dirname,'static','wardenLogin.html'));
})

router.get('/login',function(req,res){
    let query = "select * from dbo.users where email ='"+req.query.mail+"'";
    request.query(query,function(err,recordSet){
        if(err){
            console.log(`Error while querying database :- ${err}`);
        }else{
            if(recordSet){
                if(recordSet.recordset[0].password == req.query.pass){
                    res.sendFile(path.join(__dirname,'static','wardenHomePage.html'));
                }
            }else{
                res.status(403).json({
                    'statusCode': 403,
                    'message': `Credentials unmatched`
                });
            }
        }
    });
});

router.get('/regRequest',function(req,res){
    let query = "select Name,email,phone,address from dbo.users where status = 'pending'";
    request.query(query,function(err,recordSet){
        //console.log(recordSet.recordset);
        if(err){
            console.log(`Error while querying database :- ${err}`);
        }else{
            res.render('../views/registerReqList', {data:recordSet.recordset});
        }
    }) 
});

router.post('/rejectReg',function(req,res){
    let query = "update dbo.users set status = 'rejected' where email = ";
})

module.exports = router;
