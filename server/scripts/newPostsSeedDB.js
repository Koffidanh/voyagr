
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/newPosts"
);

const newPostsSeed = [{
    title: "Chichen Itza",
    description: "Chichén Itzá is a complex of Mayan ruins on Mexico's Yucatán Peninsula.",
    image: "",
    latitude: 20.6843,
    longitude: 88.5678,
    visitDate: 04 / 01 / 2021,
    userID: "",
    date: "",
    timestamp: ""
},
{
    title: "Great Wall Of China",
    description: "The Great Wall of China is a series of fortifications that were built as protection against various nomadic groups from the Eurasian Steppe.",
    image: "",
    latitude: 40.4319,
    longitude: 116.5704,
    visitDate: 04 / 08 / 2021,
    userID: "",
    date: "",
    timestamp: ""
},
{
    title: "Petra",
    description: "Petra is a famous archaeological site in Jordan's southwestern desert.",
    image: "",
    latitude: 30.3285,
    longitude: 35.4444,
    visitDate: 04 / 15 / 2021,
    userID: "",
    date: "",
    timestamp: ""
},
{
    title: "Christ The Redeemer",
    description: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil.",
    image: "",
    latitude: 22.9519,
    longitude: 43.2105,
    visitDate: 04 / 21 / 2021,
    userID: "",
    date: "",
    timestamp: ""
},
{
    title: "Machu Picchu",
    description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.",
    image: "",
    latitude: 13.1631,
    longitude: 72.5450,
    visitDate: 04 / 28 / 2021,
    userID: "",
    date: "",
    timestamp: ""
},
{
    title: "Colosseum",
    description: "The Colosseum, is an oval amphitheatre in the centre of the city of Rome, Italy.",
    image: "",
    latitude: 41.8902,
    longitude: 12.4922,
    visitDate: 05 / 01 / 2021,
    userID: "",
    date: "",
    timestamp: ""
},
{
    title: "Taj Mahal",
    description: "The Taj Mahal, originally the Rauza-i-munawwara is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.",
    image: "",
    latitude: 27.1751,
    longitude: 78.0421,
    visitDate: 05 / 08 / 2021,
    userID: "",
    date: "",
    timestamp: ""
},
{
    title: "The Great Pyramid of Giza",
    description: "The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt.",
    image: "",
    latitude: 29.9792,
    longitude: 31.1342,
    visitDate: 05 / 16 / 2021,
    userID: "",
    date: "",
    timestamp: ""
}
];

db.Posts
    .remove({})
    .then(() => db.Posts.collection.insertMany(newPostsSeed))
    .then(data => {
        console.log(data.result.n);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });