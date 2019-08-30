const express = require('express');
const router =express.Router();
const con = require('./connection.js');
const path = require('path');

router.use('/public', express.static(path.join(__dirname,'static')));

var request = new con.sql.Request();

router.get('/start',function(req,res){
    res.sendFile(path.join(__dirname,'static','studentPage.html'));
});

router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,'static','userLogin.html'));
});

router.get('/register',function(req,res){
    res.sendFile(path.join(__dirname,'static','register.html'));
});

router.post('/registration', function (req, res) {
    query = "insert into dbo.users (Name,email,phone,address,password,status) values ('"+req.body.name+"','"+req.body.email+"','"+req.body.phn+"','"+req.body.address+"','"+req.body.pass+"','pending')";
    request.query(query, function(err,data){
        if(err){
        console.log(`Error while querying database :- ${err}`);
        }
        else {
            res.sendFile(path.join(__dirname,'static','message.html'));
            
        }
    })
});

router.get('/logincheck',function(req,res){
    console.log(req.query.mail);
    query = "select * from dbo.users where email ='"+req.query.mail+"'";
    request.query(query,function(err,recordSet){
        if(err){
            console.log(`Error while querying database :- ${err}`);
        }else{
            if(recordSet){
                if(recordSet.recordset[0].password == req.query.pass){
                    /*res.status(200).json({
                        'statusCode': 200,
                        'message': `user login successfull`
                    });*/
                    let query = "select A.name,A.email,A.phone,A.address,B.Room,B.Due,B.Paid,B.Rent,C.leaves,C.applied,C.remaining from dbo.users A,dbo.student_details B,dbo.student_leaves C where A.email ='"+req.query.mail+"'";
                    request.query(query,function(err,recordSet){
                        //console.log(recordSet.recordset[0]);
                        if(err){
                            console.log(`Error while querying database :- ${err}`);
                        }else{
                            res.render('../views/userDetails', {data:recordSet.recordset[0]});
                        }
                    })
                }else{
                    res.status(403).json({
                        'statusCode': 403,
                        'message': `Credentials unmatched`
                    });
                }
            }
        }
    })
})



module.exports = router;
