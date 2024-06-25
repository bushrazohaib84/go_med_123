
import { Button } from "@/components/ui/button";
import { Ban } from "lucide-react";
import Link from "next/link";

export default function errorSuccess() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <Ban className="text-red-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Try Again!
          </h3>
          <p className="text-gray-600 my-2">
            Something went wrong...Try again
          </p>
          <p>Try Again!</p>
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
