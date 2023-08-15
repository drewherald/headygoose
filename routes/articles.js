const express = require('express');
const Article = require('./../models/article');
const router = express.Router();
const users = []; //switch to using multiple databases via connection with useDB command 
module.exports = router;
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const app = express();


const initializePassport = require('./../passport-config')
/*initializePassport(
    passport, 
    email => users.find(user => user.email === email)
}) */

app.use(flash())
app.use(session({resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))

// song pages 

router.get('/726', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/726', {articles: articles})
});

router.get('/allineed', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/allineed', {articles: articles})
});

router.get('/animal', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/animal', {articles: articles})
});

router.get('/arcadia', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/arcadia', {articles: articles})
});

router.get('/arise', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/arise', {articles: articles})
});

router.get('/arrow', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/arrow', {articles: articles})
});

router.get('/atlasdogs', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/atlasdogs', {articles: articles})
});

router.get('/awesternsun', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/awesternsun', {articles: articles})
});

router.get('/bobdon', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/bobdon', {articles: articles})
});

router.get('/borne', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/borne', {articles: articles})
});

router.get('/butterflies', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/butterflies', {articles: articles})
});

router.get('/californiamagic', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/californiamagic', {articles: articles})
});

router.get('/creatures', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/creatures', {articles: articles})
});

router.get('/dimlights', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/dimlights', {articles: articles})
});

router.get('/doobiesong', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/doobiesong', {articles: articles})
});

router.get('/dragonfly', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/dragonfly', {articles: articles})
});

router.get('/drdarkness', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/drdarkness', {articles: articles})
});

router.get('/dripfield', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/dripfield', {articles: articles})
});

router.get('/drive', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/drive', {articles: articles})
});

router.get('/earthlingoralien', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/earthlingoralien', {articles: articles})
});

router.get('/echoofarose', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/echoofarose', {articles: articles})
});

router.get('/elizabeth', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/elizabeth', {articles: articles})
});

router.get('/elmegthewise', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/elmegthewise', {articles: articles})
});

router.get('/everythingmustgo', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/everythingmustgo', {articles: articles})
});

router.get('/feelitnow', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/feelitnow', {articles: articles})
});

router.get('/flowdown', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/flowdown', {articles: articles})
});

router.get('/honeybee', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/honeybee', {articles: articles})
});

router.get('/hottea', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/hottea', {articles: articles})
});

router.get('/hungersite', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/hungersite', {articles: articles})
});

router.get('/indianriver', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/indianriver', {articles: articles})
});

router.get('/intothemyst', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/intothemyst', {articles: articles})
});

router.get('/itburnswithin', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/itburnswithin', {articles: articles})
});

router.get('/jeffengborg', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/jeffengborg', {articles: articles})
});

router.get('/jivei', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/jivei', {articles: articles})
});

router.get('/jiveii', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/jiveii', {articles: articles})
});

router.get('/jivelee', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/jivelee', {articles: articles})
});

router.get('/leadtheway', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/leadtheway', {articles: articles})
});

router.get('/leadup', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/leadup', {articles: articles})
});

router.get('/lifeontheshelf', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/lifeontheshelf', {articles: articles})
});

router.get('/lilystiger', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/lilystiger', {articles: articles})
});

router.get('/looseends', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/looseends', {articles: articles})
});

router.get('/madhuvan', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/madhuvan', {articles: articles})
});

router.get('/moby', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/moby', {articles: articles})
});

router.get('/moonrise', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/moonrise', {articles: articles})
});

router.get('/mraction', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/mraction', {articles: articles})
});

router.get('/notalone', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/notalone', {articles: articles})
});

router.get('/pancakes', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/pancakes', {articles: articles})
});

router.get('/redbird', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/redbird', {articles: articles})
});

router.get('/rockdale', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/rockdale', {articles: articles})
});

router.get('/rosewoodheart', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/rosewoodheart', {articles: articles})
});

router.get('/seekersontheridge', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/seekersontheridge', {articles: articles})
});

router.get('/silverrising', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/silverrising', {articles: articles})
});

router.get('/slowready', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/slowready', {articles: articles})
});

router.get('/soready', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/soready', {articles: articles})
});

router.get('/spiritofthedarkhorse', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/spiritofthedarkhorse', {articles: articles})
});

router.get('/thatch', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/thatch', {articles: articles})
});

router.get('/theemperessoforganos', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/theemperessoforganos', {articles: articles})
});

router.get('/thelabyrinth', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/thelabyrinth', {articles: articles})
});

router.get('/theoldmansboat', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/theoldmansboat', {articles: articles})
});

router.get('/thewhales', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/thewhales', {articles: articles})
});

router.get('/thisoldsea', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/thisoldsea', {articles: articles})
});

router.get('/timetoflee', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/timetoflee', {articles: articles})
});

router.get('/travelers', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/travelers', {articles: articles})
});

router.get('/trevorreadspoetry', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/trevorreadspoetry', {articles: articles})
});

router.get('/tumble', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/tumble', {articles: articles})
});

router.get('/turkishhills', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/turkishhills', {articles: articles})
});

router.get('/turnedclouds', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/turnedclouds', {articles: articles})
});

router.get('/whitelights', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/whitelights', {articles: articles})
});

router.get('/wysterialane', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/wysterialane', {articles: articles})
});

router.get('/yeti', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/yeti', {articles: articles})
});

router.get('/yourocean', async (req,res)=> {
    const articles =  await Article.find();
    res.render('pages/yourocean', {articles: articles})
});

// login pages

router.get('/login', (req,res)=> {
    res.render('pages/login')
});

router.get('/register', (req,res)=> {
    res.render('pages/register')
});

router.post('/login', (req,res) =>{

})

router.post('/register', async (req,res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now.toString(), //when upgrade to DB this will be rng
            username: req.body.email,
            password: hashedPassword
        })
        res.redirect('login')
    }catch(error){
        res.redirect('register')
    }console.log(users)})

// new submission page

router.get('/newSubmission', (req,res)=> {
res.render('pages/newSubmission', {article: new Article()})
});

router.get('/:slug', async (req,res)=> {
    const article = await Article.findOne({slug: req.params.slug});
    if(article==null){
        res.redirect('/');
    }
    res.render(`pages/${article.song}`, {article: article});
});

router.post('/', async (req,res)=> {
    let article = new Article({
        song: req.body.song,
        date: req.body.date,
        venue: req.body.venue,
        city: req.body.city,
        description: req.body.description,
    })

    let checker = true;
    const articles =  await Article.find();
    articles.forEach(element => {
        if(element.song.toLowerCase() == article.song.toLowerCase() && element.date === article.date){
            checker = false;
        }
    });

    if(checker){
        try{
            article = await article.save();
            res.redirect(`/pages/${article.slug}`);
         }catch(error){
             console.log(error)
             res.render('pages/newSubmission', {article: article});
         }
    }else{
        res.render('pages/alreadyExist', {article: article});
    }
    
}); 

