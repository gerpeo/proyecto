import app from "./index";
import dotnev from 'dotenv'; // 6.8k (gzipped: 3k)
import { PORT } from "./config/index";
dotnev.config();

app.listen(PORT, ()=>{
    console.log(`Se ha iniciado node en el puerto ${PORT}`)
})