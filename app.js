
const express=require('express');
const app=express();
const fsService =require('./fs.services');

// const userDb=require('./userDb/users.json');

// app.use(express.json());
// app.use(express.urlencoded({extended :true}));


app.get('/users',async (req, res)=>{
    const users=await fsService.reader();
    res.json(users);

 })



// app.get('/users/:userId',(req, res)=>{
//
//     const {userId}=req.params;
//     console.log(typeof userId);
//     const user=users[+userId];
//     res.json(user);
//
// })

//
// app.get ('/welcome',(req, res)=>{
//     res.send('WELCOME!!!WELCOME!!!')
//     console.log('WELCOME!!!WELCOME!!!WELCOME!!!');
//     // res.end();
// });

// app.post ('/users',async (req, res)=>{
//     const {name,age,gender}=req.body;
//     const users=await fsService.reader();
//
//     const newUser={id:users[users.length-1]?.id+1 || 1, name, age, gender};
//     users.push(newUser);
//      await fsService.writer(users);
//
//
//     res.status(201).json(newUser);
//
// });
//

const PORT= 5100;

app.listen(PORT,()=>{
    console.log(`server has started on PORT: ${PORT}`);
});