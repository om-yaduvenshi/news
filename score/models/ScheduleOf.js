var request = require('request')
var apiKey = "vzgmsgqxenvnt7xcfw9qu2rb"
schedule = (req,res)=>{
    schedule = "http://api.sportradar.us/cricket-t2/en/teams/" + req.params.id + "/schedule.json?api_key=" + apiKey
    request(schedule,function(err,response,body){
        if(!err && response.statusCode == 200){
            data = JSON.parse(body)
            res.render("schedule",{ data : data })
        }else{
            console.log(err)
            res.render("index")
        }
    })
}
module.exports = schedule
