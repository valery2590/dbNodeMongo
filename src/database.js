const mongoose = require ('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const URI = 'mongodb://localhost/proyecto-propio';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch( err => console.log(err));


module.exports = mongoose;