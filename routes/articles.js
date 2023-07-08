const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

module.exports = router;


// song pages 

router.get('/726', (req,res)=> {
    res.render('pages/726')
});

router.get('/allineed', (req,res)=> {
    res.render('pages/allineed')
});

router.get('/animal', (req,res)=> {
    res.render('pages/animal')
});

router.get('/arcadia', (req,res)=> {
    res.render('pages/arcadia')
});

router.get('/arise', (req,res)=> {
    res.render('pages/arise')
});

router.get('/arrow', (req,res)=> {
    res.render('pages/arrow')
});

router.get('/atlasdogs', (req,res)=> {
    res.render('pages/atlasdogs')
});

router.get('/awesternsun', (req,res)=> {
    res.render('pages/awesternsun')
});

router.get('/bobdon', (req,res)=> {
    res.render('pages/bobdon')
});

router.get('/borne', (req,res)=> {
    res.render('pages/borne')
});

router.get('/butterflies', (req,res)=> {
    res.render('pages/butterflies')
});

router.get('/californiamagic', (req,res)=> {
    res.render('pages/californiamagic')
});

router.get('/creatures', (req,res)=> {
    res.render('pages/creatures')
});

router.get('/dimlights', (req,res)=> {
    res.render('pages/dimlights')
});

router.get('/doobiesong', (req,res)=> {
    res.render('pages/doobiesong')
});

router.get('/dragonfly', (req,res)=> {
    res.render('pages/dragonfly')
});

router.get('/drdarkness', (req,res)=> {
    res.render('pages/drdarkness')
});

router.get('/dripfield', (req,res)=> {
    res.render('pages/dripfield')
});

router.get('/drive', (req,res)=> {
    res.render('pages/drive')
});

router.get('/earthlingoralien', (req,res)=> {
    res.render('pages/earthlingoralien')
});

router.get('/echoofarose', (req,res)=> {
    res.render('pages/echoofarose')
});

router.get('/elizabeth', (req,res)=> {
    res.render('pages/elizabeth')
});

router.get('/elmegthewise', (req,res)=> {
    res.render('pages/elmegthewise')
});

router.get('/everythingmustgo', (req,res)=> {
    res.render('pages/everythingmustgo')
});

router.get('/feelitnow', (req,res)=> {
    res.render('pages/feelitnow')
});

router.get('/flowdown', (req,res)=> {
    res.render('pages/flowdown')
});

router.get('/honeybee', (req,res)=> {
    res.render('pages/honeybee')
});

router.get('/hottea', (req,res)=> {
    res.render('pages/hottea')
});

router.get('/hungersite', (req,res)=> {
    res.render('pages/hungersite')
});

router.get('/indianriver', (req,res)=> {
    res.render('pages/indianriver')
});

router.get('/intothemyst', (req,res)=> {
    res.render('pages/intothemyst')
});

router.get('/itburnswithin', (req,res)=> {
    res.render('pages/itburnswithin')
});

router.get('/jeffengborg', (req,res)=> {
    res.render('pages/jeffengborg')
});

router.get('/jive1', (req,res)=> {
    res.render('pages/jivei')
});

router.get('/jive2', (req,res)=> {
    res.render('pages/jiveii')
});

router.get('/jivelee', (req,res)=> {
    res.render('pages/jivelee')
});

router.get('/leadtheway', (req,res)=> {
    res.render('pages/leadtheway')
});

router.get('/leadup', (req,res)=> {
    res.render('pages/leadup')
});

router.get('/lifeontheshelf', (req,res)=> {
    res.render('pages/lifeontheshelf')
});

router.get('/lilystiger', (req,res)=> {
    res.render('pages/lilystiger')
});

router.get('/looseends', (req,res)=> {
    res.render('pages/looseends')
});

router.get('/madhuvan', (req,res)=> {
    res.render('pages/madhuvan')
});

router.get('/moby', (req,res)=> {
    res.render('pages/moby')
});

router.get('/moonrise', (req,res)=> {
    res.render('pages/moonrise')
});

router.get('/mraction', (req,res)=> {
    res.render('pages/mraction')
});

router.get('/notalone', (req,res)=> {
    res.render('pages/notalone')
});

router.get('/pancakes', (req,res)=> {
    res.render('pages/pancakes')
});

router.get('/redbird', (req,res)=> {
    res.render('pages/redbird')
});

router.get('/rockdale', (req,res)=> {
    res.render('pages/rockdale')
});

router.get('/rosewoodheart', (req,res)=> {
    res.render('pages/rosewoodheart')
});

router.get('/seekersontheridge', (req,res)=> {
    res.render('pages/seekersontheridge')
});

router.get('/silverrising', (req,res)=> {
    res.render('pages/silverrising')
});

router.get('/slowready', (req,res)=> {
    res.render('pages/slowready')
});

router.get('/soready', (req,res)=> {
    res.render('pages/soready')
});

router.get('/spiritofthedarkhorse', (req,res)=> {
    res.render('pages/spiritofthedarkhorse')
});

router.get('/thatch', (req,res)=> {
    res.render('pages/thatch')
});

router.get('/theemperessoforganos', (req,res)=> {
    res.render('pages/theemperessoforganos')
});

router.get('/thelabyrinth', (req,res)=> {
    res.render('pages/thelabyrinth')
});

router.get('/theoldmansboat', (req,res)=> {
    res.render('pages/theoldmansboat')
});

router.get('/thewhales', (req,res)=> {
    res.render('pages/thewhales')
});

router.get('/thisoldsea', (req,res)=> {
    res.render('pages/thisoldsea')
});

router.get('/timetoflee', (req,res)=> {
    res.render('pages/timetoflee')
});

router.get('/travelers', (req,res)=> {
    res.render('pages/travelers')
});

router.get('/trevorreadspoetry', (req,res)=> {
    res.render('pages/trevorreadspoetry')
});

router.get('/tumble', (req,res)=> {
    res.render('pages/tumble')
});

router.get('/turkishhills', (req,res)=> {
    res.render('pages/turkishhills')
});

router.get('/turnedclouds', (req,res)=> {
    res.render('pages/turnedclouds')
});

router.get('/whitelights', (req,res)=> {
    res.render('pages/whitelights')
});

router.get('/wysterialane', (req,res)=> {
    res.render('pages/wysterialane')
});

router.get('/yeti', (req,res)=> {
    res.render('pages/yeti')
});

router.get('/yourocean', (req,res)=> {
    res.render('pages/yourocean')
});

// new submission page

router.get('/newSubmission', (req,res)=> {
res.render('pages/newSubmission', {article: new Article()})
});

router.get('/:id', (req,res)=> {
});

router.post('/', async (req,res)=> {
    const article = new Article({
        song: req.body.song,
        date: req.body.date,
        venue: req.body.venue,
        city: req.body.city,
        description: req.body.description,
    })
    try{
       article = await article.save();
       res.redirect(`/pages/${post.id}`)
    }catch(error){
        res.render('pages/newSubmission', {article: article})
    }
    
}); 

