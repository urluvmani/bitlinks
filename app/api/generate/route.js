import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json()
    const client = await  clientPromise;
    const db = await  client.db("bitlink")
    const collection = await db.collection("links")

    let doc = await collection.findOne({shorturl:body.shorturl})
    if(doc){
  return Response.json({ error:true, success:false ,  message: 'URL generated successfully' })

    }

    await collection.insertOne({
        url:body.url,
        shorturl:body.shorturl
    })
  return Response.json({ error:false, success:true, message: 'URL generated successfully' })
}