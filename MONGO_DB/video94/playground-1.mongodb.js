

// Select the database to use.
use('sigmaDatabase1');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "Java",
      "Price": 2000,
      "Instructor": "Priyanshu"
    },
    {
      "name": "Python",
      "Price": 2500,
      "Instructor": "Anjali"
    },
    {
      "name": "C++",
      "Price": 1800,
      "Instructor": "Rahul"
    },
    {
      "name": "JavaScript",
      "Price": 2200,
      "Instructor": "Sakshi"
    },
    {
      "name": "Data Structures",
      "Price": 3000,
      "Instructor": "Manoj"
    },
    {
      "name": "Machine Learning",
      "Price": 4000,
      "Instructor": "Divya"
    },
    {
      "name": "HTML & CSS",
      "Price": 1500,
      "Instructor": "Ravi"
    },
    {
      "name": "SQL",
      "Price": 2000,
      "Instructor": "Pooja"
    },
    {
      "name": "Cybersecurity",
      "Price": 3500,
      "Instructor": "Amit"
    },
    {
      "name": "Android Development",
      "Price": 2800,
      "Instructor": "Sneha"
    }
  
  
]);

// Print a message to the output window.
console.log("Done Inserting Data");

