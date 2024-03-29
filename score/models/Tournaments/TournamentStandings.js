var request = require('request')
var apiKey = "vzgmsgqxenvnt7xcfw9qu2rb"

tStandings = (req,res) => {
    url = "http://api.sportradar.us/cricket-t2/en/tournaments/";
    url += req.params.id;
    url += "/standings.json?api_key=";
    url += apiKey;
    request(url,function(err,response,body){
        if(!err && response.statusCode == 200){
            parsedStandings = JSON.parse(body)   
            res.render("Tournaments/tournamentStandings", { standings : parsedStandings})
        }
        else{
            console.log(err)
            res.render("index")
        }
    })
}
module.exports = tStandings
