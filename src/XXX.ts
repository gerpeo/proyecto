import express from 'express';
import dotnev from 'dotenv'; // 6.8k (gzipped: 3k)
import cors from 'cors';
import exp from 'constants';
dotnev.config();

//inicializar la app
const app = express();

//Middlewares
app.use(cors({origin: '*' }))
app.use(express.json);

app.get('/', (req,res)=>{
    res.json({message:"HOLA MUNDO"})
})

export default app;