import React, { useEffect, useRef, useState } from "react";
import { IVideo, VideoAction } from "@/types/video";
import LessonsListIcon from "@/assets/icons/lessons-list.svg";
import NextLessonIcon from "@/assets/icons/next-lesson.svg";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@/assets/icons/close.svg";
import PlayIcon from "@/assets/icons/play.svg";

const INITIAL_STATE: IVideo = {
  link: "",
  title: "",
  shortDescription: "",
};

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [paused, setPaused] = useState(false);
  const [video, setVideo] = useState<IVideo>(INITIAL_STATE);

  useEffect(() => {
    setVideo({
      link: "https://nanolearningbucket.s3.amazonaws.com/telegram-cloud-document-2-5435974965054681057.mp4",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at commodi dicta distinctio dolor dolorum, excepturi explicabo incidunt nisi perspiciatis quaerat quam voluptatibus. Consequuntur error labore nobis quisquam sapiente, soluta.",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at commodi dicta distinctio dolor dolorum, excepturi explicabo incidunt nisi perspiciatis quaerat quam voluptatibus. Consequuntur error labore nobis quisquam sapiente, soluta.",
    });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLVideoElement;
            if (entry.isIntersecting) {
              target.play();
            } else {
              target.pause();
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(videoRef.current);

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = video.link;
    }
  }, [video.link]);

  const handleTogglePlay = async () => {
    if (videoRef.current?.paused) {
      setPaused(false);
      videoRef.current.muted = false;
      await videoRef.current?.play();
    } else {
      setPaused(true);
      videoRef.current?.pause();
    }
  };

  const actions: VideoAction[] = [
    {
      icon: LessonsListIcon,
      title: "List of lessons",
      link: "/",
    },
    {
      icon: NextLessonIcon,
      title: "Next lesson",
      link: "/",
    },
  ];

  return (
    <div className={"relative h-full"}>
      <video
        autoPlay
        muted
        loop
        playsInline
        ref={videoRef}
        className={"z-[10] h-full object-cover"}
        onClick={handleTogglePlay}
      />

      <div
        className={
          "absolute bottom-[28px] left-[22px] flex w-[190px] flex-col gap-[14px]"
        }
      >
        <h1 className={"line-clamp-2 text-2xl font-bold leading-7"}>
          {video.title}
        </h1>
        <h2 className={"line-clamp-2 text-base leading-4"}>
          {video.shortDescription}
        </h2>
      </div>

      <Link href={"/"} className={"absolute right-[25px] top-[34px]"}>
        <Image src={CloseIcon} alt="Close" width={50} height={50} />
      </Link>

      <div
        className={
          "absolute bottom-[25px] right-[25px] flex flex-col gap-[18px]"
        }
      >
        {actions.map((action) => (
          <Link
            href={action.link}
            key={action.title}
            className={"flex w-9 flex-col items-center gap-[5px]"}
          >
            <Image src={action.icon} alt={action.title} />
            <div className={"text-center text-sm font-bold leading-4"}>
              {action.title}
            </div>
          </Link>
        ))}
      </div>

      {paused && (
        <div
          className={
            "absolute left-[50%] top-[50%] z-[11] h-[75px] w-[75px] translate-x-[-50%] translate-y-[-50%]"
          }
          onClick={handleTogglePlay}
        >
          <Image src={PlayIcon} alt={"Play"} />
        </div>
      )}
    </div>
  );
};

export default Video;
