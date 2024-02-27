import React from "react";
import sampleVideo from '../assets/a.mp4'
function Card({
  username,
  videoSrc,
  imgalt = "armpas",
  ptxt = "Lorem ipsum dolor sit amet consectetur ",
  btntxt = "click me",
}) {
  return (
    <>
      {/* <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
        <img
          src={imgsrc}
          alt={imgalt}
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">{ptxt}</p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btntxt} →
          </button>
        </div>
      </div> */}
      <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
      <video
        src={sampleVideo}
        type="video/mp4" /* Adjust the type if it's a different format */
        className="z-0 h-full w-full rounded-md object-cover"
        autoPlay
        controls
        loop
      ></video>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">{ptxt}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btntxt} →
        </button>
      </div>
    </div>
    </>
  );
}

export default Card;
