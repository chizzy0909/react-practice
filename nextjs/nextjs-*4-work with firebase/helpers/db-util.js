import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb://CHZ:aaaaaaaa@cluster0-shard-00-00.0cynf.mongodb.net:27017,cluster0-shard-00-01.0cynf.mongodb.net:27017,cluster0-shard-00-02.0cynf.mongodb.net:27017/nextEvents?ssl=true&replicaSet=atlas-ve3qm2-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
