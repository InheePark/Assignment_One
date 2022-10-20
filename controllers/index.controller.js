exports.home = function(req, res, next){
    res.render('Home', 
    {title: 'Home', username: req.user ? req.user.username : ''});
}

exports.about = function(req, res, next){
    res.render('About', 
    {title: 'About', username: req.user ? req.user.username : ''});
}

exports.projects = function(req, res, next){
    res.render('Projects', 
    {title: 'Projects', username: req.user ? req.user.username : ''});
}

exports.service = function(req, res, next){
    res.render('Service', 
    {title: 'Service', username: req.user ? req.user.username : ''});
}

exports.contact = function(req, res, next){
    res.render('Contact', 
    {title: 'Contact', username: req.user ? req.user.username : ''});
}