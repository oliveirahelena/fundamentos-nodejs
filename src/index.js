const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({message:'Hello World Ignite!'});
});

app.get('/courses', (request, response) => {
    response.json(["Course 1", "Course 2", "Course 3"]);
});

app.post('/courses', (request, response) => {
    response.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.put('/courses/:id', (request, response) => {
    response.json(["Course 6", "Course 2", "Course 3", "Course 4"]);
});

app.patch('/courses/:id', (request, response) => {
    response.json(["Course 6", "Course 7", "Course 3", "Course 4"]);
});

app.delete('/courses/:id', (request, response) => {
    response.json(["Course 6", "Course 7", "Course 4"]);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
