var express = require("express");

var app = express();

var cors = require("cors");

var path = require("path");

app.use(cors());
app.use(express.json());

var publicPath = path.resolve(__dirname, "staticFiles");


app.use(function(request, response, next) {
    console.log("In comes a request to: " + request.method + " " + request.url);
        next();
});

app.use("/images", express.static(publicPath));

app.use("/images", function(request, response){
    response.status(404).send("Image not found!");
});

let productsArray = [
{
                            id: 1,
                            subject: "Information Technology",
                            location: "Hendon",
                            price: "£120",
                            spaces: 5,
                            alt: "Information Technology image"
                        },
                        {
                            id: 2,
                            subject: "Mathematics",
                            location: "Brighton",
                            price: "£50",
                            spaces: 5,
                            alt: "Mathematics image"
                        },
                        {
                            id: 3,
                            subject: "Science",
                            location: "Cambridge",
                            price: "£60",
                            spaces: 5,
                            alt: "Science image"
                        },
                        {
                            id: 4,
                            subject: "Physical Education",
                            location: "Luton",
                            price: "£90",
                            spaces: 5,
                            alt: "Physical Education image"
                        },
                        {
                            id: 5,
                            subject: "Religious Education",
                            location: "Barnet",
                            price: "£80",
                            spaces: 5,
                            alt: "Religious Education image"
                        },
                        {
                            id: 6,
                            subject: "English",
                            location: "Brentford",
                            price: "£100",
                            spaces: 5,
                            alt: "English image"
                        },
                        {
                            id: 7,
                            subject: "History",
                            location: "Chelsea",
                            price: "£95",
                            spaces: 5,
                            alt: "History image"
                        },
                        {
                            id: 8,
                            subject: "Music",
                            location: "Hendon",
                            price: "£110",
                            spaces: 5,
                            alt: "Music image"
                        },
                        {
                            id: 9,
                            subject: "Art",
                            location: "Hendon",
                            price: "£90",
                            spaces: 5,
                            alt: "Art image"
                        },
                        {
                            id: 10,
                            subject: "Geography",
                            location: "Hendon",
                            price: "£95",
                            spaces: 5,
                            alt: "Geography image"
                        }
];

require("dotenv").config({ path: "./config.env" });
const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.MONGODB_PREFIX + process.env.MONGODB_USERNAME + ":" +
process.env.MONGODB_PASSWORD + process.env.MONGODB_URL;
const client = new MongoClient(uri);
const db=client.db("Webstore");


app.get("/lessons", async function(request, response) {
    console.log("In comes a request to: " + request.url);

    let collection = await db.collection("lessons");
    let results = await collection.find({}).toArray();
    response.send(results);
});

app.post("/orders", async function(request, response) {
    var body = request.body;

    let collection = db.collection("orders");
    let result = await collection.insertOne(body);

    console.log("Order received");
    console.log("Name: " + body.fullname);
    console.log("Number: " + body.number);
    console.log("Lesson IDs: " + body.lessonIDs);
    console.log("Total Price: £" + body.totalPrice);

    response.json({ message: "Order received!", result: result });
});

app.put("/lessons/:_id", async function(request, response) {
    try {
        let collection = db.collection("lessons");
        let tempid = request.params._id;

        const query = { _id: new ObjectId(tempid) };

        const updates = {
            $set: request.body
        };

        const result = await collection.updateOne(query, updates);

        console.log("Lesson update result:", result);

        response.send(result);

    } catch (error) {
        console.error("Error updating lesson:", error);
        response.status(500).send(error.message);
    }
});

// 404 Error 
app.use(function(request, response, next) {
    response.status(404).send("Page not found!");
});


app.listen(3000, function() {
console.log("App started on port 3000");
});