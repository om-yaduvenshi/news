var request = require('request')
var apiKey = "vzgmsgqxenvnt7xcfw9qu2rb"

mLineups = (req,res)=>{
    var lineups = "http://api.sportradar.us/cricket-t2/en/matches/" + req.params.id + "/lineups.json?api_key=" + apiKey
    request(lineups,(err,response,body)=>{
        if(!err && response.statusCode == 200){
            parsedData = JSON.parse(body)
            res.render("Matches/matchLineups",{ data : parsedData })
        }else{
            console.log(err)
            res.render("index")
        }
    })
}
module.exports = mLineups
