import express from 'express'
const app = express();


const PORT  = process.env.PORT || 300
app.listen(PORT , ()=>{
    console.log('server start at port '+ PORT);
})