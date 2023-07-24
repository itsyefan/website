import React from "react";
import profile from '../../assets/profile.jpg'

export default function AboutContent() {
  return (
    <div className="bg-left basis-4/12 flex flex-col items-center justify-center">
      <div className="w-44 h-44 bg-white rounded-full overflow-hidden drop-shadow-2xl">
        <img src={profile} />
      </div>
      <div className="text-center text-white w-7/12">
        <h1 className="font-bold text-5xl p-6">About Me</h1>
        <p>
          I am currently a final year student, studying a Bachelor of
          Engineering (Honours) in Software Engineering at the University of
          Auckland.<br></br> <br></br>
          Outside of work, I enjoy all things fitness. Namely football, running,
          bouldering, table tennis, badminton and the gym.<br></br> <br></br>
          My other passions and hobbies include video games, music, puzzles and mechanical keyboards.
        </p>
      </div>
    </div>
  );
}
