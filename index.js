const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon news is running')
})

app.listen(port, () =>{
    console.log(`Dragon API is running on port : ${port}`);
})

const categories = require('./data/categories.json')

app.get('/categories', (req, res) =>{
    res.send(categories);
})

const news = require('./data/news.json')

app.get('/news', (req, res) =>{
    res.send(news);
})

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews);
})

app.get('/categories/:id', (req, res) =>{
    const id = (req.params.id)
    if(id === 0){
        res.send(news)
    }
    else{
        const categoryNews = categories.filter(n => (n.id === id))
        res.send(categoryNews);
    }
})