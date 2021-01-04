const mongoose = require ('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const URI = 'mongodb://localhost/proyecto-mern';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is on dude!'))
    .catch( err => console.log(err));


module.exports = mongoose;