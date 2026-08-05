const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const FILE = "data.json";

app.get("/api/users", (req, res) => {
    fs.readFile(FILE, (err, data) => {
        if (err) return res.json([]);
        res.json(JSON.parse(data));
    });
});

app.post("/api/users", (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email are required"
        });
    }

    fs.readFile(FILE, (err, data) => {

        let users = [];

        if (!err) users = JSON.parse(data);

        users.push({
            id: users.length + 1,
            name,
            email
        });

        fs.writeFile(FILE, JSON.stringify(users, null, 2), () => {
            res.json({
                success: true,
                message: "User Added"
            });
        });

    });

});

app.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});
