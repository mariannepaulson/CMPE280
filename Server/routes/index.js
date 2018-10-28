/**
 * http://usejsdoc.org/
 */

var express = require('express');
let app = express();
var router = express.Router();
var cntrMain = require('../controllers/main');

app.use(express.static(__dirname+'/public'));

//MongoDB code
var modelMain = require("../models/modelMain");
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/eRecruitDB');

//MongoDB code
app.use(function(req, res, next)
{
    req.db = db;
    next();
});


router.get('/', cntrMain.home)
router.get('/home', cntrMain.home);

/* Routes associated with Talent */
router.get('/talent', modelMain.get_talent);
router.get('/addTalent', cntrMain.new_talent);
router.post('/addTalent', modelMain.add_talent);
router.get('/talent/:fname', modelMain.get_searchtalent);
router.get('/deleteTalent/:fname', cntrMain.get_deletetalent);
router.post('/deleteTalent/:fname', modelMain.post_deletetalent);
router.get('/addRecords', modelMain.get_addRecords);

/*
 * To get the registration page
 */
router.get('/signUp', cntrMain.signUp);

/*
 * Post registration
 */
router.post('/registration', cntrMain.postRegistration);

/*
 * Post login
 */
router.post('/login',cntrMain.postLogin);


/*
 * post apply Job
 */
router.post('/applyJob', cntrMain.postApplyJob);

/*
 * get logout
 */

router.get('/logout', cntrMain.getLogout);

/*
 * Defining the router
 */

module.exports = router;
