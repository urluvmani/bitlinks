import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
  const { slug } = await params

  const client = await  clientPromise;
    const db = await  client.db("bitlink")
    const collection = await db.collection("links")

    let doc = await collection.findOne({shorturl:slug})
    if (doc) {
        redirect(doc.url)
    }
    else{
        redirect(process.env.NEXT_PUBLIC_HOST)
    }

  return <div>My Post: {slug}</div>
}