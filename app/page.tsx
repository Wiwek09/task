// import Image from "next/image";
import Test from "./Test/page";
import data from "./lib/dummy-data";
// import Modal from "./components/Dailogue-Box/Modal";
// import { Fragment } from "react";

export default function Home() {
  return (
       <div className=" flex justify-center gap-12" >
       <Test id={data[0].id} ></Test>
       <Test id={data[1].id} ></Test>
       </div>

  );
}
