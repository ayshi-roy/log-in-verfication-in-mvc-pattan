const mongoose = require('mongoose');

const dbUrl = `mongodb+srv://ayshiray:2204AYshi1999@cluster0.jmmpi.mongodb.net/InternProject?retryWrites=true&w=majority`

if(!dbUrl){
    console.error('Mongo url not set in env file');
    return new Error('Mongo url not set in env file')
}

mongoose.connect(dbUrl,{    
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true 
}, err => {
    if(err){
        console.error(`failed to connect mongoose ${err}`);
    }else {
        console.log(`connect to db server`);
    }
});

module.exports = mongoose;