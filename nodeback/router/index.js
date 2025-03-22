const express = require('express')
const router = express.Router()
const st = require('../student')
const database = require('../databse/db')

router.get('/getdata', async (req, res) => {

    const db = await database.main();
    const collection = db.collection('studentlist');
    const findResult = await collection.find({}).toArray();
    res.send({
        status: 200,
        message: findResult
    })
})
router.get('/getlist', (req, res) => {
    res.send({
        status: 500,
        data: st.list

    })
})

router.get('/getdetails', (req, res) => {
    const result = su.sum(10, 20);
    const result2 = su.minus(40, 90);
    res.send({
        status: 200,
        data: result,
        message: result2
    });
});
router.post('/insertdata',async(req,res)=>
{
    try{
             
    const db = await database.main();
    const collection = db.collection('studentlist');
    const Result = await collection.insertOne(req.body);
    console.log(Result);
    res.send({
        status:200,
        message:'record inserted successfully',
        data:Result

    })
    }
    catch (err) {
        res.send({
            message: "something went wrong , please try again later" + err,
            status: 500
        })
    }
})
router.delete('/deleteData',async(req,res)=>{
    try{
        const db = await database.main();
        const collection = db.collection('studentlist');
        const Result = await collection.deleteOne({name:req.query.name});
        console.log(Result);
       if(Result.deletedCount>0)
       {
        res.send({
            message: "",
            status: 200,
            data:"record deleted successfully"
        })
       }
       else{
        res.send({
            message: " please try again later",
           
            
        })
       }
       
    }
    catch (err) {
        res.send({
            message: "something went wrong ,please try again later" + err,
            status: 500
        })
    }
   
})

module.exports=router