import express from 'express';
import cors from 'cors';
//import allRoutes from './routes'

//Inicializar la app
const app = express();

//Middlewares
app.use(cors({origin: '*'}))
app.use(express.json());

//Framework express recibiendo una petición.
//app.use('/api',allRoutes)

app.get('/', (req,res)=>{
    res.json({message:"HOLA MUNDO"})
})

export default app;