const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/',(req,res)=>{
    res.send("Hello world!.");
});
app.post("/add",(req,res)=>{
    let paese1 = req.params.num1;
    let paese2 = req.params.num2;
    let num1 = req.body.num1;
    let num2 = req.body.num2;
     if(isNaN(parseFloat(num1))||isNaN(parseFloat(num2))){
        res.send({
            status:"error",
            message:"Invalid data type",
            sum:undefined

        });
        return;
    }
    if(parseFloat(num1)>1000000 || parseFloat(num2)>1000000){
        res.send({
            status: "error",
            message: "Overflow",
            sum: undefined
            });
            return;
    }
    if(parseFloat(num1)<-1000000 || parseFloat(num2)<-1000000){
        res.send({
            status: "error",
            message: "Underflow",
            sum: undefined
            });
            return;

    }
    if(!NaN(parseFloat(num1)&&!NaN(parseFloat(num2)))){
        let sum = parseFloat(num1)+parseFloat(num2);
        if(sum<1000000){
            res.send({
                status: "success",
                message: "the sum of given two numbers",
                sum: sum
                });
        }else{
            res.send({
                status: "error",
                message:"Overflow",
                sum: undefined
                });
        }
    }
});
app.post("/sub",(req,res)=>{
    let paese1 = req.params.num1;
    let paese2 = req.params.num2;
    let num1 = req.body.num1;
    let num2 = req.body.num2;
     if(isNaN(parseFloat(num1))||isNaN(parseFloat(num2))){
        res.send({
            status:"error",
            message:"Invalid data types",
            sum:undefined

        });
        return;
    }
    if(parseFloat(num1)>1000000 || parseFloat(num2)>1000000){
        res.send({
            status: "error",
            message: "Overflow",
            sum: undefined
            });
            return;
    }
    if(parseFloat(num1)<-1000000 || parseFloat(num2)<-1000000){
        res.send({
            status: "error",
            message: "Underflow",
            sum: undefined
            });
            return;

    }
    if(!NaN(parseFloat(num1)&&!NaN(parseFloat(num2)))){
       res.send({
        status: "success",
        message: "the difference of given two numbers",
        difference: parseFloat(num1)-parseFloat(num2)
        });
    }
   
});

app.post("/multiply",(req,res)=>{
    let paese1 = req.params.num1;
    let paese2 = req.params.num2;
    let num1 = req.body.num1;
    let num2 = req.body.num2;
     if(isNaN(parseFloat(num1))||isNaN(parseFloat(num2))){
        res.send({
            status:"error",
            message:"Invalid data type",
            sum:undefined

        });
        return;
    }
    if(parseFloat(num1)>1000000 || parseFloat(num2)>1000000){
        res.send({
            status: "error",
            message: "Overflow",
            sum: undefined
            });
            return;
    }
    if(parseFloat(num1)<-1000000 || parseFloat(num2)<-1000000){
        res.send({
            status: "error",
            message: "Underflow",
            sum: undefined
            });
            return;

        }

        if(!NaN(parseFloat(num1)&&!NaN(parseFloat(num2)))){
            let multiply = parseFloat(num1)*parseFloat(num2);

            if(multiply>1000000){
                res.send({
                    status: "error",
                    message: "Overflow",
                    sum: undefined
                    });
        

            }
            else{
                res.send({
                    status: "success",
                    message: "The product of given numbers",
                    result: multiply
                });

            }
        }
    });
    app.post("/divide",(req,res)=>{
        let paese1 = req.params.num1;
        let paese2 = req.params.num2;
        let num1 = req.body.num1;
        let num2 = req.body.num2;
         if(isNaN(parseFloat(num1))||isNaN(parseFloat(num2))){
            res.send({
                status:"error",
                message:"Invalid data type",
                sum:undefined
    
            });
            return;
        }
        if(parseFloat(num1)>1000000 || parseFloat(num2)>1000000){
            res.send({
                status: "error",
                message: "Overflow",
                sum: undefined
                });
                return;
        }
        if(parseFloat(num1)<-1000000 || parseFloat(num2)<-1000000){
            res.send({
                status: "error",
                message: "Underflow",
                sum: undefined
                });
                return;
    
        }
        if(parseFloat(num2)===0){
            
            res.send({
                status: "error",
                message: "Cannot divide by zero",
                sum: undefined
                });
                return;
        }
        if(!NaN(parseFloat(num1)&&!NaN(parseFloat(num2)))){
           res.send( {
                status: "success",
                message: "The division of given numbers",
                result: parseFloat(num1)/parseFloat(num2)
                });

        }
    });




app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;