const db = require("./connection");
const { User, Comment, Category, Plan, Reply } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Productivity" },
    { name: "Health" },
    { name: "Entertainment" },
    { name: "Food" },
    { name: "Clothing" },
    { name: "Miscellaneous" },
  ]);

  console.log("categories seeded");

  await Comment.deleteMany();

  const comments = await Comment.insertMany([
    {
      commentText: "This is cmment number one.",
    },
    {
      commentText: "This is cmment number two.",
    },
    {
      commentText: "This is cmment number three.",
    },
    {
      commentText: "This is cmment number four.",
    },
    {
      commentText: "This is cmment number five.",
    },
]);
    console.log("comments seeded");

    await Reply.deleteMany();

    const replies = await Reply.insertMany([
        {
            replyBody:'This is reply number one'
        },
        {
            replyBody:'This is reply number two'
        },
        {
            replyBody:'This is reply number three'
        },
        {
            replyBody:'This is reply number four'
        },
        {
            replyBody:'This is reply number five'
        },
    ]
    );
    console.log("replies seeded")

    await Plan.deleteMany();

    const plans = await Plan.insertMany([
        {
            comments: comments[0]._id,
            categories: categories[0]._id,
        },
        {
            comments: comments[1]._id,
            categories: categories[1]._id,
        },
        {
            comments: comments[2]._id,
            categories: categories[2]._id,
        },
        {
            comments: comments[3]._id,
            categories: categories[3]._id,
        },
        {
            comments: comments[4]._id,
            categories: categories[4]._id,
        },
        
    ])
    
  console.log("plans seeded");

  await User.deleteMany();

  await User.create({
    username: "Pamela",
    email: "pamela@testmail.com",
    password: "password12345",
    plans: [
      {
        plans: [plans[0]._id, plans[1]._id],
      },
    ],
  });

  await User.create({
    username: "Elijah",
    email: "eholt@testmail.com",
    password: "password12345",
    plans: [
        {
          plans: [plans[2]._id, plans[3]._id],
        },
      ],
  });

  console.log("users seeded");

  process.exit();
});
