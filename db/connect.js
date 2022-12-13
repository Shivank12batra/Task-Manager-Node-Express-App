 const mongoose = require('mongoose');
 
 const connectionString = 'mongodb+srv://shivank:nirvanainmybrain@nodeexpressprojects.xj7pyxe.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';
 
 mongoose.set('strictQuery', true)

 mongoose.connect(connectionString)
 .then(console.log('CONNECTED TO THE DB...'))
 .catch((err) => console.log(err));

