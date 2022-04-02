const express = require ("express");
const app = express();
const dotenv = require ("dotenv");
const helmet = require ("helmet");
const morgan = require ("morgan");

// const { user } = require("./routes/users");
app.use(express.json())
const mongoose = require ("mongoose");

const userRoute = require("./routes/users")
const authRoute = require("./routes/auth");

dotenv.config();
const env = process.env

//
// const { MongoClient } = require("mongodb");
// const Db = process.env.MONGO_URL;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
//
// var _db;
//
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("employees");
//         console.log("Successfully connected to MongoDB.");
//       }
//       return callback(err);
//          });
//   },
//
//   getDb: function () {
//     return _db;
//   },
// };
//
// //middleware
// app.use(express.json());
//
//
// app.listen(8800,()=>{
//     console.log("Backend server is running");
// });
//

// app.use(helmet());
// app.use(morgan("common"));

app.use(userRoute)
app.use(authRoute)

const URI = `mongodb+srv://chamod:${env.PASSWORD}@cluster0.4irka.mongodb.net/${env.DATABASE}?retryWrites=true&w=majority`

mongoose.connect(URI, {useUnifiedTopology:true, useNewUrlParser:true}).
then(res=>{
  app.listen(process.env.PORT || 8800, ()=>{
    console.log("Successfully connected to MongoDB !")
    console.log("Server is Starting !")
  })
}).catch(err=>{
  if(err)
    console.log(err.message)
})




