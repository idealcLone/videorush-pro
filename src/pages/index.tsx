import { NextPage } from "next";
import List from "@/components/List";

import CloseIcon from "../assets/icons/close.svg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className={"relative h-full w-full bg-primaryBlack"}>
      <div className={"absolute right-[25px] top-[34px]"}>
        <Image src={CloseIcon} alt="Close" width={50} height={50} />
      </div>
      <h1
        className={
          "text-bold lh-8 pb-[45px] pt-[100px] text-center text-[26px] text-white"
        }
      >
        List of lessons
      </h1>
      <List />
    </main>
  );
};

export default Home;
