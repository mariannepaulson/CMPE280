

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
