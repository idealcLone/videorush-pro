import React from "react";
import CourseListItem from "@/components/courses/CourseListItem";

const List: React.FC = () => {
  return (
    <ul className={"flex w-full flex-col"}>
      {Array.from(Array(5).keys()).map((item) => (
        <li key={item} className={"px-[18px]"}>
          <CourseListItem />
          <div className={"h-[2px] w-full bg-[#4D4D4D]"} />
        </li>
      ))}
    </ul>
  );
};

export default List;
