const db = require("./connection");
const { User, Aspiration } = require("../models");

db.once("open", async () => {
  await Aspiration.deleteMany();
<<<<<<< HEAD

  const aspiration = await Aspiration.insertMany([
    {
      title: "Productivity",
      description: "This is an aspiration for the productivity",
      date: new Date,
      categories: "Health",
      priority: "5"
    },

    {
      title: "Right On",
      description: "This is the best of the best",
      date: new Date,
      categories: "Inspiration",
      priority: "1"
    }


=======

  const aspirations = await Aspiration.insertMany([
    { title: "Productivity" ,
    description: "This is an aspiration for the productivity",
    date: new Date,
    categories:"Health",
    priority: "5"},

    { title: "Right On" ,
    description: "This is the best of the best",
    date: new Date,
    categories:"Inspiration",
    priority: "1"}
   
    
>>>>>>> develop
  ]);

  console.log("categories seeded");



  await User.deleteMany();

  await User.create({
    username: "Pamela",
    email: "pamela@testmail.com",
    password: "password12345",
<<<<<<< HEAD
    aspiration: [
      {
        aspirations: [aspiration[0]._id, aspiration[1]._id],
=======
    aspirations: [
      {
        aspirations: [aspirations[0]._id, aspirations[1]._id],
>>>>>>> develop
      },
    ],
  });


  console.log("user seeded");

  process.exit();
});