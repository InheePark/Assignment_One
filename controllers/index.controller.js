/*
Home, About, Service, Contact views controller for app
Inhee Park (301162514)
October 21st, 2022
*/

// home view controller
exports.home = function(req, res, next){
    res.status(200).json(
        {
            success: true, 
            message: "this is the home endpoint"
        }
    )
}

// about view controller
exports.about = function(req, res, next){
    res.render('About', 
    {title: 'About', username: req.user ? req.user.username : ''});
}

// projects view controller
exports.projects = function(req, res, next){
    res.render('Projects', 
    {title: 'Projects', username: req.user ? req.user.username : ''});
}

// service view controller
exports.service = function(req, res, next){
    res.render('Service', 
    {title: 'Service', username: req.user ? req.user.username : ''});
}

// contact view controller
exports.contact = function(req, res, next){
    res.render('Contact', 
    {title: 'Contact', username: req.user ? req.user.username : ''});
}