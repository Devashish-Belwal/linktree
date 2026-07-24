const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://433devashish_db_user:fHPCgv9qnREzRCV1@cluster0.qbskcka.mongodb.net/?appName=Cluster0";

(async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected!");
    await client.close();
  } catch (err) {
    console.error(err);
  }
})();