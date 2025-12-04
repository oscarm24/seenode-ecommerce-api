import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/products',(req,res)=>{
    res.json([
        {
            id: '1',
            name:"laptop gaming",
            price: 1500,
            description: "A high performance laptop suitable for gaming.",
            imageURL:'https://planetadigitalec.com/cdn/shop/files/61k6rA494_L._AC_SL1500_1080x.jpg?v=1708789124'
        }
    ])
})

app.listen(port,()=>{
    console.log('server on port',port);
    
})