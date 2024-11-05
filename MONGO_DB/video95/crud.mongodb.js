// CURD OPERATION :- //
use("crudDb")

// db.createCollection("courses")

// db.courses.insertOne({
//     "Name": "Prince web dev",
//     "Price": 0,
//     "Assignment": 12,
//     "Projects": 45
// })


// CREATE :- //
// db.courses.insertMany([
//     {
//       "Name": "Prince web dev",
//       "Price": 0,
//       "Assignment": 12,
//       "Projects": 45
//     },
//     {
//       "Name": "JavaScript Essentials",
//       "Price": 500,
//       "Assignment": 8,
//       "Projects": 20
//     },
//     {
//       "Name": "Python Basics",
//       "Price": 1000,
//       "Assignment": 15,
//       "Projects": 30
//     },
//     {
//       "Name": "Machine Learning Bootcamp",
//       "Price": 2000,
//       "Assignment": 10,
//       "Projects": 25
//     },
//     {
//       "Name": "Advanced CSS & Sass",
//       "Price": 700,
//       "Assignment": 6,
//       "Projects": 10
//     },
//     {
//       "Name": "Data Structures in C++",
//       "Price": 1200,
//       "Assignment": 20,
//       "Projects": 35
//     },
//     {
//       "Name": "React Native Development",
//       "Price": 1500,
//       "Assignment": 12,
//       "Projects": 40
//     },
//     {
//       "Name": "SQL for Beginners",
//       "Price": 600,
//       "Assignment": 5,
//       "Projects": 15
//     },
//     {
//       "Name": "Cybersecurity Fundamentals",
//       "Price": 1800,
//       "Assignment": 18,
//       "Projects": 32
//     },
//     {
//       "Name": "Full Stack JavaScript",
//       "Price": 2500,
//       "Assignment": 22,
//       "Projects": 50
//     }
//   ]
//   )


// READ :- //
// let a = db.courses.find({Price: 0})
// console.log(a)
// console.log(a.count())

// let b = db.courses.findOne({Price: 0})
// console.log(b)

// UPDATA :-
// db.courses.updateOne({Price : 0}, {$set: {Price: 100}})
// db.courses.updateMany({Price : 0}, {$set: {Price: 1000}})


// DELETE :- //
// db.courses.deleteOne({Price: 100})
// db.courses.deleteMany({Price: 1000})


// READ THESE OPERATORS :-
// https://www.mongodb.com/docs/manual/reference/operator/query/