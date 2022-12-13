const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    res.json(req.body)
}
const getTask = (req, res) => {
    res.json({id: req.params.id})
}
const updateTask = (req, res) => {
    res.send('update this specific task')
}
const deleteTask = (req, res) => {
    res.send('delete this task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}