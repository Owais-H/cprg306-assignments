import React from "react";
import Link from "next/link";
import Page from "./week-2/page";

export default function Home() {
  const linkStyles="text-2xl underline text-cyan-300 hover:text-cyan-600 mb-4"
  const mainStyles="container-lg bg-black h-screen p-20"
  const divStyles="m-20 text-center text-xl "
  
  return(
    <main className={mainStyles }>
      <h1 className="text-3xl text-center text-white ">CPRG 306: Web Development 2 - Assignments</h1>
      <div className={divStyles }>
      <div className="mb-4">
      <Link className={linkStyles} href="./week-2">Week 2 Assignment</Link>
      </div>
      <div  className="mb-4">
      <Link className={linkStyles} href="./week-3">Week 3 Assignment</Link>
      </div>
      <div  className="mb-4">
      <Link className={linkStyles} href="./week-4">Week 4 Assignment</Link>
      </div>
      <div  className="mb-4">
      <Link className={linkStyles} href="./week-5">Week 5 Assignment</Link>
      </div>
      <div  className="mb-4">
      <Link className={linkStyles} href="./week-6">Week 6 Assignment</Link>
      </div>
      <div  className="mb-4">
      <Link className={linkStyles} href="./week-7">Week 7 Assignment</Link>
      </div>
      <div  className="mb-4">
      <Link className={linkStyles} href="./week-8">Week 8 Assignment</Link>
      </div>
      <div  className="mb-4">
      <Link className={linkStyles} href="./week-9">Week 9 Assignment</Link>
      </div>
      <div  className="mb-4">
      <Link className={linkStyles} href="./week-10">Week 10 Assignment</Link>
      </div>
      </div>
    </main>
  );
}