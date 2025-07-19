import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlink");
    const collection = db.collection("links");

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json({ message: "URL generated successfully" });
  } catch (error) {
    console.error("❌ API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
