exports.home = function(req, res, next){
    res.render('Home');
}

exports.about = function(req, res, next){
    res.render('About');
}

exports.projects = function(req, res, next){
    res.render('Projects');
}

exports.service = function(req, res, next){
    res.render('Service');
}

exports.contact = function(req, res, next){
    res.render('Contact');
}