const express = require('express');
const articleRouter = require('./routes/articles');
const Article = require('./models/article');
const mongoose = require ('mongoose')
const app = express();
const uri = 'mongodb+srv://drewherald:xMKEkj1GyZz7tet6@cluster0.axqyxaw.mongodb.net/?retryWrites=true&w=majority'

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

//login

const bcrypt = require('bcrypt')
const users = []

app.post('/login', (req,res)=> {
    
})

app.post('/register', async (req,res)=> {
    try{
        const hashedPassword = await bcrypt(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            email: req.body.email,
            password: hashedPasssword
        })
        res.redirect('/login')
    }catch(e){

    }
})


