const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();


const port = 3000;

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
}) 

app.use('/api/v1/tasks', tasks);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening at ${port}`))
    } catch(err) {
        console.log(err)
    }
} 

start();


// app.get(/api/v1/tasks) - get all the tasks
// app.post(/api/v1/tasks) - create a new task
// app.get(/api/v1/tasks/:id) - get single task
// app.patch(/api/v1/tasks/:id) - update task
// app.delete(/api/v1/tasks/:id) - delete task