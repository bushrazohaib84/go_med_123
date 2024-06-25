
import { Button } from "@/components/ui/button";
import { CircleCheckBig  } from "lucide-react";
import Link from "next/link";
import {ShieldCheck} from "lucide-react"
export default function stripeSuccess() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CircleCheckBig className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you pruchase...From Go Med
          </p>
          <p>Come Again!</p>
         <Link href={"/"}>
          <Button className="mt-3 text-white">
          Go Back
        </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
