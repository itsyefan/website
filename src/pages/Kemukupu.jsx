import React from "react";
import Home from "../assets/kemukupu.png";
import Fade from "react-reveal/Fade";

export default function Kemukupu() {
  return (
    <div className="h-screen w-screen flex flex-row bg-kemu text-white">
      <div className="basis-7/12 flex flex-col justify-center items-center">
        <Fade left>
          <div className="w-6/12 text-center">
            <h1 className="text-9xl font-bold">Kemu Kupu</h1>
            <p className="text-2xl font-normal p-4">
              {" "}
              Te Reo spelling quiz game to familiarise young children with
              common Te Reo words and phrases.
            </p>
            <p className="text-xl">Java, JavaFX, Bash</p>
          </div>
        </Fade>
      </div>
      <div className="flex flex-row basis-5/12 justify-center items-center">
        <Fade>
          <div className="h-3/6 w-5/6">
            <img src={Home} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
