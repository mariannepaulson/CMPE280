

module.exports.get_talent = function(req, res)
{
    var db = req.db;

    var collection = db.get('talent');

    collection.find({}, {},
        function(err, docs)
        {
            res.render('displayTalent.hbs', {
                pageTitle: 'Talent Pool List',
                talent: docs,
                currentYear: new Date().getFullYear()
            })

        });
};

module.exports.add_talent = function(req, res)
{
    // Set our internal DB variable

    var db = req.db;

    var collection = db.get('talent');

    // Get our form values. These rely on the "name" attributes.
    var fname = req.body.fname;
    var mname = req.body.mname;
    var lname = req.body.lname;
    var phone = req.body.phone;
    var email = req.body.email;
    var jobs = req.body.jobs;


    // Submit to the database.
    collection.insert( { "fname" : fname,
                         "mname" : mname,
                         "lname" : lname,
                         "phone" : phone,
                         "email" : email,
                         "jobs" : jobs },
                       function (err, docs)
                       {
                           if (err) {
                               res.send("Insert failed.");
                           }
                           else {
                               res.redirect("talent");
                           }
                       });
};
module.exports.get_searchtalent = function(req, res)
{
    var db = req.db;
    var fname = req.params.fname;

    var collection = db.get('talent');

    collection.find({fname: fname},
        function(err, docs)
        {
            res.render('displayTalent.hbs', {
                pageTitle: 'Talent:' + fname,
                talent: docs,
                currentYear: new Date().getFullYear()
            })

        });
};

/*
 * POST delete user page.
 */
module.exports.post_deletetalent = function(req, res)
{
    var fname = req.params.fname;
    var db = req.db;
    var collection = db.get('talent');

    collection.remove( { "fname" : fname },
        function (err, doc)
        {
            if (err) {
                res.send("Delete failed.");
            }
            else {
                res.send("Successfully deleted " + fname);
            }
        });
};

/*
 * Get add records into database
 */

module.exports.get_addRecords = function(req, res){

	var jsonData = require('../MOCK_DATA.json');
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, function(err, db) {
	    if (err) throw err;
	    var dbase = db.db("eRecruitDB");
	    dbase.createCollection("talent", function(err, res) {
	        if (err) throw err;
	        console.log("Collection created!");
	        dbase.collection("talent").insertMany(jsonData, function (err, result) {
	            if (err) throw err;
	            console.log("1000 Recorded Inserted");
	    });

	});
	});

	res.send('Successfully inserted 1000 rows into database');
};
