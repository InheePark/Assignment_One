/*
Home, About, Service, Contact views controller for app
Inhee Park (301162514)
October 21st, 2022
*/

// home view controller
exports.home = function(req, res, next){
    res.json(
        {
            success: true, 
            message: "this is the home endpoint"
        }
    )
}
