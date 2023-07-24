import React from "react";
import Map from "../assets/Map.jpg";
import Fade from "react-reveal/Fade";

export default function Trackr() {
  return (
    <div className="h-screen w-screen flex flex-row bg-blue text-white">
      <div className="basis-7/12 flex flex-col justify-center items-center">
        <Fade left>
          <div className="w-6/12 text-center">
            <h1 className="text-9xl font-bold">Trackr</h1>
            <p className="text-2xl font-normal p-4">
              A mobile indoor tracking application to aid rest home caregivers
              in caring for their patients.
            </p>
            <p className="text-xl">
              React Native, JavaScript, ExpressJS, NodeJS, MongoDB, C++, Arduino
            </p>
          </div>
        </Fade>
      </div>
      <div className="flex flex-row basis-5/12 justify-center items-center">
        <Fade right>
          <div className="h-5/6">
            <img src={Map} className="h-5/6" />
          </div>
        </Fade>
      </div>
    </div>
  );
}
