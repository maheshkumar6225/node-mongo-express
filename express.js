let bodyParser  =   require('body-parser');
let cors        =   require('cors');


module.exports = (app, config) => {
    console.log('express start');
   // let http = require('http').Server(app);
    app.use(cors());
    app.use(bodyParser.json({limit : '5mb'}));
    app.use(bodyParser.urlencoded({limit : '5mb', extended: true }));

//    http.listen(port = 3000, function(){
  //      console.log('listening in http://localhost:' + port);
    // });
    
}

