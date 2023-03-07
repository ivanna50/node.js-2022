
// const event = require('node:events');
//
// const eventEmitter = new event();
//
// eventEmitter.on('click',()=>{
//     console.log('Click, Click!!');
// });
//
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
//
// eventEmitter.once('ClickAndDie',()=>{
//
// console.log ('I am die');
// });
// eventEmitter.emit('ClickAndDie');
// eventEmitter.emit('ClickAndDie');
// eventEmitter.emit('ClickAndDie');
//
// const fs = require('node:fs');
// const path = require('node:path');
//
// const readStream = fs.createReadStream(path.join('text','test.txt'),{encoding:'utf-8'});
// const writeStream=fs.createWriteStream(path.join('text','test2.txt'))
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// })
//
// readStream.pipe(writeStream);



const express=require('express');
const app=express();
const userDb=require('./userDb/user');

app.use(express.json());
app.use(express.urlencoded({extended :true}));

// const users=[
//     {
//         name:'tania',
//         age:25,
//         gender:'female'
//     },
//     {
//         name:'tonina',
//         age:55,
//         gender:'male'
//     },
//     {
//         name:'clavaa',
//         age:15,
//         gender:'female'
//     },
//     {
//         name:'anton',
//         age:45,
//         gender:'male'
//     },
// ]
app.get('/user/1',(req, res)=>{
    // res.json({user:'viktor'});
    // res.send('users:anna');
    res.json(userDb[1]);

});
// app.get('/users/:userId',(req, res)=>{
//
//     const {userId}=req.params;
//     console.log(typeof userId);
//     const user=users[+userId];
//     res.json(user);
//
// })


app.get ('/welcome',(req, res)=>{
    res.send('WELCOME!!!WELCOME!!!')
    // console.log('WELCOME!!!WELCOME!!!WELCOME!!!');
    // res.end();
});

// app.post ('/users',(req, res)=>{
//     const body=req.body;
//     console.log(body);
//
// })


const PORT= 5000;

app.listen(PORT,()=>{
    console.log(`server has started on PORT: ${PORT}`);
});