
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import pw from "/public/pw.png"
import { Button } from "./button";
import {ShoppingBagIcon} from "lucide-react"
import pww from "/public/pww.png"
async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <main className="top-2  ">
        <Image
        src={pww}
        alt="boys"
        width={600}
        height={600}
      className="boys justify-center items-center text-center bg-white rounded-full "
    />
  

  <br />
  <br />

  <div className="sm:m-4">
        <h1 className="scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-5xl mt-9 space-y-4 m-6 text-blue-600 ">
       <span className="text-7xl">Go</span> <span className="text-green-500 text-7xl "><span className="font-medium text-7xl">M</span>ed</span>
       <br/> <span className="text-black text-3xl"> Your Trusted Online Pharmacy...</span>
      </h1>
       <p className="leading-7 [&:not(:first-child)]:mt-9 m-6">
       Explore a wide range of prescription drugs and over-the-counter medications at Go Med all the things explore now. 
       Enjoy fast delivery and expert customer support.
      
       </p>
      

     <Button className="mt-11 px-8 m-4 text-white ">
       <ShoppingBagIcon className="mr-2 h-4 w-4 " /> Shop Now
     </Button>
     </div>

        
    </main>
  );
}