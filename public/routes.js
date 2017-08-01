  var path=require('path');
module.exports = function (app, fs, absPath) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname+"/index.html"));
    });
    app.post('/students', function (req, res) {
        var message=null;
        fs.exists("./public/student.json", function (err, data) {
            if (!err) {
                message=err;
                res.json(message);
            }
            else {
                message= fs.readFileSync("./public/student.json", 'utf8');
                res.json(message);
            }
        });
     
    });
}
