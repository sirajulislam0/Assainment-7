import Footer from "@/components/Footer/Footer";

import Banner from "@/components/homepage/Banner";
import { Suspense } from "react";
import FriendPage from "./friends/page";

export default function Home() {
  return (

    <>
      <Banner />


      <Suspense fallback={
        <div className="flex justify-center items-center h-100">
          <span className="loading loading-spinner text-error"></span>
        </div>
      }>
     
     <FriendPage/>
      </Suspense>

     

    </>
  );
}
