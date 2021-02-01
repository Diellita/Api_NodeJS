const mongoose =  require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/salestime", {
    useMongoClient: true
}).then(() =>{
    console.log("MongoDB conectado com sucesso")
}).catch((err) =>{
    console.log("ERRO ao conectar MongoDB: "+ err)
})
