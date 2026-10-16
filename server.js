var express = require("express");

var app = express();

var cors = require("cors");

app.use(cors());
app.use(express.json());

let productsArray = [
{
                            id: 1,
                            subject: "Information Technology",
                            location: "Hendon",
                            price: "£120",
                            spaces: 5,
                            image: "images/IT.jpeg",
                            alt: "Information Technology image"
                        },
                        {
                            id: 2,
                            subject: "Mathematics",
                            location: "Brighton",
                            price: "£50",
                            spaces: 5,
                            image: "images/Mathematics.jpg",
                            alt: "Mathematics image"
                        },
                        {
                            id: 3,
                            subject: "Science",
                            location: "Cambridge",
                            price: "£60",
                            spaces: 5,
                            image: "images/Science.avif",
                            alt: "Science image"
                        },
                        {
                            id: 4,
                            subject: "Physical Education",
                            location: "Luton",
                            price: "£90",
                            spaces: 5,
                            image: "images/PE.jpg",
                            alt: "Physical Education image"
                        },
                        {
                            id: 5,
                            subject: "Religious Education",
                            location: "Barnet",
                            price: "£80",
                            spaces: 5,
                            image: "images/RE.png",
                            alt: "Religious Education image"
                        },
                        {
                            id: 6,
                            subject: "English",
                            location: "Brentford",
                            price: "£100",
                            spaces: 5,
                            image: "images/English.jpg",
                            alt: "English image"
                        },
                        {
                            id: 7,
                            subject: "History",
                            location: "Chelsea",
                            price: "£95",
                            spaces: 5,
                            image: "images/History.jpg",
                            alt: "History image"
                        },
                        {
                            id: 8,
                            subject: "Music",
                            location: "Hendon",
                            price: "£110",
                            spaces: 5,
                            image: "images/Music.jpg",
                            alt: "Music image"
                        },
                        {
                            id: 9,
                            subject: "Art",
                            location: "Hendon",
                            price: "£90",
                            spaces: 5,
                            image: "images/Art.avif",
                            alt: "Art image"
                        },
                        {
                            id: 10,
                            subject: "Geography",
                            location: "Hendon",
                            price: "£95",
                            spaces: 5,
                            image: "images/Geography.jpg",
                            alt: "Geography image"
                        }
];

app.get("/", function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.json(productsArray);
});

app.use(function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
});

app.listen(8080, function() {
console.log("App started on port 8080");
});