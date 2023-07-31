const PORT = 8000
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.get('/', (req,res)=>{
    const (API)
    res.json('hi')
})

app.listen(8000, ()=>{
    console.log(`Backend is running ${PORT}`);
})