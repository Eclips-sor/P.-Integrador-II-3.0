    import express from 'express';
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    res.json("Teste")});

app.listen(3000, () console.log('Server running on port 3000'));