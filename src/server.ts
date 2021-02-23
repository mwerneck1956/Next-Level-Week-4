import express, { response } from 'express';

const app = express();

app.listen(3333,()=>{
    console.log('Server is running!');
})

app.get('/users', (req,res) => {
    return res.json({
        message : "Hello World"
    })
})

app.post('/',(request,response)=>{
    return response.json({
        message : "Os dados foram salvos com sucesso!"
    })
})  