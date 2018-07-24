function addAPIRoutes(app, friends, callback) {
    app.get("/api/friends", function (req, res) {

        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        console.log(newFriend);
        let bestFriend = getMatch(newFriend, friends);
        res.json(bestFriend);
    });

    console.log("API Routes added");
    
    callback(app);
}


function getMatch(newFriend, friends) {
    let closestMatch = friends[0];
    let lowestScore = getScore(newFriend, friends[0]);
    let currentScore;

    for (let i = 1; i < friends.length; i++) {
        if (newFriend.name !== friends[i].name) 
            currentScore = getScore(newFriend, friends[i]);
            if (currentScore < lowestScore) {
                lowestScore = currentScore;
                closestMatch = friends[i];
            }
    }
    return closestMatch;
}

function getScore(friendOne, friendTwo) {
    let arrayOne = friendOne.scores;
    let arrayTwo = friendTwo.scores;
    let score = 0;
    for (let i = 0; i < arrayOne.length; i++) {
        score += Math.abs(parseInt(arrayOne[i]) - parseInt(arrayTwo[i]));
    }
    console.log(score);
    return score;
}

module.exports = addAPIRoutes;