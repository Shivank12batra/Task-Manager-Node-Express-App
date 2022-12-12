const express = require('express');
const app = express();

const port = 3000;

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
})

// app.get(/api/v1/tasks) - get all the tasks
// app.post(/api/v1/tasks) - create a new task
// app.get(/api/v1/tasks/:id) - get single task
// app.patch(/api/v1/tasks/:id) - update task
// app.delete(/api/v1/tasks/:id) - delete task