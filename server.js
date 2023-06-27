const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.use( express.static( "photos" ) );

app.use(express.static('headygoose'));


app.get('/', (req,res)=> {
    const articles = [{
        title: 'All I Need',
        date: new Date('June 23, 2023'),
        description: 'Louisville Palace'
    }];
    res.render('pages/index', {articles: articles})
});

app.listen(1000);