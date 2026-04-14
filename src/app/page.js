import Footer from "@/components/Footer/Footer";
import Friends from "@/components/Friends/Friends";
import Banner from "@/components/homepage/Banner";
import { Suspense } from "react";

export default function Home() {
  return (

    <>
      <Banner />


      <Suspense fallback={
        <div className="flex justify-center items-center h-100">
          <span className="loading loading-spinner text-error"></span>
        </div>
      }>
        <Friends />
      </Suspense>

      <Footer />

    </>
  );
}
