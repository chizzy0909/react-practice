import { connectDatabase, insertDocument } from "../../helpers/db-util";
// import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    // const client = await MongoClient.connect(
    //   "mongodb://CHZ:aaaaaaaa@cluster0-shard-00-00.0cynf.mongodb.net:27017,cluster0-shard-00-01.0cynf.mongodb.net:27017,cluster0-shard-00-02.0cynf.mongodb.net:27017/nextEvents?ssl=true&replicaSet=atlas-ve3qm2-shard-0&authSource=admin&retryWrites=true&w=majority"
    // );
    // const db = client.db();
    // await db.collection("emails").insertOne({ email: userEmail });
    // client.close();

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Signed up!", email: userEmail });
  }
}

export default handler;
