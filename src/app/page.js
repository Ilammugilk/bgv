import Image from "next/image";
import BVHome from "./home/page";
import Header from "../components/navbar/page";
import Footer from "../components/Footer/page";

export default function Home() {
  return (
    <>
    <Header/>
    <BVHome/>
    <Footer/>
    </>
  );
}
