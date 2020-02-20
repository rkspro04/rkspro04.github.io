let bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

let data = [{text: 'Put faraj to sleep', id: 1}, {text: 'Eat Nutella', id: 2}, {text: 'Snort Cocaine', id:3}];

module.exports = function(app){
    app.get('/', (req,res)=>{
        res.render('index', {data: data});
    });

    app.post('/', urlencodedParser, (req,res)=>{
        console.log(req.body);
        let a = [];
        for (let i = 0; i < data.length; i++) {
            a.push(data[i].id);
        }

        let highest = Math.max.apply(Math, a);
        
        req.body.id =  highest + 1;
           
        
        console.log(req.body);
        data.push(req.body);
        res.json(data);
    });

    app.delete('/:id', (req,res)=>{
        data.forEach(e =>{
            if(e.id == parseInt(req.params.id)){
                data.splice(data.indexOf(e), 1);
                return;
            }
        });
        res.json(data);
    });
}
