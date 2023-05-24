import { NextPage } from "next";
import Video from "@/components/Video";

const Lesson: NextPage = () => {
  return (
    <main className={"relative w-full text-white"}>
      <Video />
      <Video />
      <Video />
    </main>
  );
};

export default Lesson;
