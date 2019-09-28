let mongoose = require('mongoose');
// Connecting with mongo db
const uri = "mongodb+srv://<dbuser>:<dbpassword>@mongocluster-w1o2d.azure.mongodb.net/test?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('Database sucessfully connected')
},
error => {
console.log('Database could not connected: ' + error)
}
) 

module.exports ={
    dburi : uri
}