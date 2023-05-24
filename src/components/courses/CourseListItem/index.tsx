import React from "react";
import Link from "next/link";

const CourseListItem: React.FC = () => {
  return (
    <Link href={"/lesson"} className={"flex items-center gap-[18px] py-[18px]"}>
      <div className={"h-[76px] w-[48px] bg-red-100"} />
      <div className={"text-bold lh-7 text-[23px] text-white"}>
        About Course
      </div>
    </Link>
  );
};

export default CourseListItem;
