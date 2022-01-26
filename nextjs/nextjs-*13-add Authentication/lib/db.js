import MongoClient from "mongodb/lib/mongo_client";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb://CHZ:aaaaaaaa@cluster0-shard-00-00.0cynf.mongodb.net:27017,cluster0-shard-00-01.0cynf.mongodb.net:27017,cluster0-shard-00-02.0cynf.mongodb.net:27017/mySignUp?ssl=true&replicaSet=atlas-ve3qm2-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  return client;
}
