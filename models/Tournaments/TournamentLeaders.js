var request = require('request')
var apiKey = "vzgmsgqxenvnt7xcfw9qu2rb"
tLeaders = (req,res)=>{
    var link = "http://api.sportradar.us/cricket-t2/en/tournaments/" + req.params.id + "/leaders.json?api_key=" + apiKey
    console.log(link)
    request(link,(err,response,body)=>{
        if(!err && response.statusCode == 200){
            parsedData = JSON.parse(body)
            res.render("Tournaments/tournamentLeaders",{ data : parsedData })
        }else{
            console.log(err)
            res.render("index")
        }
    })
}
module.exports = tLeaders
