const mongoose = require('mongoose');
const {config} = require("../config/secret")

main().catch(err => console.log(err));

async function main() 
{
  mongoose.set('strictQuery' , false);

  await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster1.ysoxgsh.mongodb.net/ls28?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true`);

  console.log("mongo connect")
}