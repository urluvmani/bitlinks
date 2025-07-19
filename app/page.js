import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="main grid grid-cols-2 w-full h-screen">
      <div className="left w-full h-136 flex flex-col justify-center items-center">
      <h2 className="md:text-4xl text-xl text-center text-gray-500 hover:text-gray-600 font-bold ">The best URL shortner</h2>
      <p className="text-center w-1/2 text-gray-600">We are the most straightforward url shortner in the World. Because we dont ask you to login.</p>
   <div>   <button className="relative my-5 ml-5 inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-purple-500 group-hover:from-purple-500 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<Link href={"/shorten"} className="relative font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-purple-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Lets Try
</Link>
</button>
      <button className="relative my-5 inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-purple-500 group-hover:from-purple-500 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<Link href={"/shorten"} className="relative font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-purple-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Read more
</Link>
</button></div>
      </div>
      <div className="right w-full flex justify-center items-center h-136">
     <Image className="mix-blend-color-burn" width={400} height={400} alt="vector image" src={"/vector2.png"} />
      </div>
    </div>
    </>
  );
}
