"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const Generate = () => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    console.log(result)
    alert(result.message)
  })
  .catch((error) => console.error(error));
    
  }
  

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start mt-20">
      <div className="md:w-1/3 sm:w-full h-auto flex flex-col justify-center rounded-md  items-start gap-2 bg-purple-200 p-4">
        <h1 className="font-bold text-gray-700 text-2xl">
          Generate your short URLs
        </h1>
        <input
        value={url}
        onChange={(e)=>{seturl(e.target.value)}}
          className="bg-white outline-none px-2 w-full py-1 rounded-md"
          type="text"
          placeholder="Enter URL"
        />
        <input
        value={shorturl}
        onChange={(e)=>{setshorturl(e.target.value)}}
          className="bg-white outline-none px-2 w-full py-1 rounded-md"
          type="text"
          placeholder="Enter your custom short url"
        />
        <button onClick={()=>Generate()} className="relative my-5 inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm w-full text-gray-900 rounded-lg group bg-gradient-to-br from-purple-700 to-purple-800 group-hover:from-purple-300 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative font-bold px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-purple-500 w-full rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Generate
          </span>
        </button>
        {generated&& <code>
          <span className="font-bold text-lg">Your Link </span> <br />
          <Link target="_blank" href={generated}>{generated}</Link>
          </code>}
      </div>
    </div>
  );
};

export default Page;
