const express = require('express');
const articleRouter = require('./routes/articles');
const Article = require('./models/article');
const mongoose = require ('mongoose')
const app = express();
const uri = 'mongodb+srv://drewherald:xMKEkj1GyZz7tet6@cluster0.axqyxaw.mongodb.net/?retryWrites=true&w=majority'
let songBook = [];

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("connected to mongoDB");
    }catch(error){
        console.log(error);
    }
}

connect();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use( express.static( "photos" ) );

app.use(express.static('headygoose'));



app.get('/', async (req,res)=> {
    const articles = await Article.find();
    res.render('pages/index', {articles: articles})
}); 

app.listen(2000);

app.use('/pages', articleRouter);

//filter for each page


