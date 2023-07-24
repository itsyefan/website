import React from "react";
import Dashboard from "../assets/dashboard.png";
import Events from "../assets/events.png";
import Fade from "react-reveal/Fade";

export default function Geosaur() {
  return (
    <div className="h-screen w-screen flex flex-row bg-offwhite text-black">
      <div className="basis-7/12 flex flex-col justify-center items-center">
        <Fade left>
          <div className="w-6/12 text-center">
            <h1 className="text-9xl font-bold">Geosaur</h1>
            <p className="text-2xl font-normal p-4">
              {" "}
              Itinerary generation web application with the aim of simplifying
              travel planning.
            </p>
            <p className="text-xl">
              React, NodeJS, ExpressJS, MongoDB, JavaScript, Google Maps API
            </p>
          </div>
        </Fade>
      </div>
      <div className="flex flex-row basis-5/12 justify-center items-center">
        <Fade right>
          <div className="h-4/6 w-5/6">
            <img src={Dashboard} className="pb-4" />
            <img src={Events} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
