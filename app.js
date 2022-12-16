const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();
const notFound = require('./middleware/not-found')


const port = 3000;

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.use(notFound);

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