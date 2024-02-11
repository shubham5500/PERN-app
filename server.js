import express from 'express';
import cors from 'cors';
import errorMiddleware from './error.middleware.js';
const port = process.env.PORT || 8001;

const app = express();
app.use(express.json())
app.use(cors());

app.post('/todos', (req, res) => {
    console.log('cb 1');
})

app.get('/todos', (req, res) => {
    throw new Error('error in get')
    res.send('Hello')
})

app.use(errorMiddleware)
 

app.listen(port, () => {
   console.log('Listening on port '+ port); 
})