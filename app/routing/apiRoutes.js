function addAPIRoutes(app, friends, callback) {
    app.get("/api/friends", function (req, res) {

        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;


        res.json(newFriend);
    });

    console.log("API Routes added");
    
    callback(app);
}

module.exports = addAPIRoutes;