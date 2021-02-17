const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required !!! Please give complete Data"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Melon",
//     rating: 8,
//     review: "So round fruit!!"
// });

// fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const grapes = new Fruit({
    name: "Grapes",
    rating: 10,
    review: "Delicuis frish , or al rasins but most as Wine!!"
});

grapes.save();

Person.updateOne({ name: "John" }, { favouriteFruit: grapes }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Data succesfully updated!!!");
    }
});

// const person = new Person({
//     name: "Amy",
//     age: 37,
//     favouriteFruit: pineapple
// });

//person.save();

