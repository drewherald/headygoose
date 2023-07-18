const express = require('express');
const articleRouter = require('./routes/articles');
const mongoose = require ('mongoose')
const app = express();

mongoose.connect('mongodb://localhost/headygoose',{useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use( express.static( "photos" ) );

app.use(express.static('headygoose'));


app.get('/', (req,res)=> {
    const articles = [{
        title: 'All I Need',
        date: '2023-06-23',
        description: 'Louisville Palace'
    }];
    res.render('pages/index', {articles: articles})
});

app.listen(2000);

app.use('/pages', articleRouter);
