var data = [{item : 'get milk'},{item : 'kill people'},{item : 'teact yoshi'}];
module.exports = function(app){
    app.get('/todo',function(req,res){
        //console.log(req.url);
        res.render('todo',{todos:data});

    });
    app.post('/todo',function(req,res){
        data.push(req.body);
        res.json(data);
        
    });
    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(mobj){
            return mobj.item !== req.params.item;
        } );
        console.log(data);
        res.json(data);
    });
}