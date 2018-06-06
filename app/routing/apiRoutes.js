var friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        var bestFriend = {};
        var difference = Infinity;
        var userTotal = 0;
        for (var i = 0; i < friendsData.length; i++) {
            
            var friendTotal = 0;
                for (var x = 0; x < friendsData[i].scores.length; x++) {
                   friendTotal += friendsData[i].scores[x];
                    userTotal = req.body.answer[x];
                }
                console.log(userTotal);
                console.log(friendTotal);
                console.log(difference);
            if(userTotal - friendTotal < difference) {
        
                difference = userTotal - friendTotal;
                bestFriend = friendsData[i];
            }
        }
        res.json(bestFriend);
    });
}