import React from "react";
import Tech from "./Tech";
import SmallTech from "./SmallTech";
import java from "../../assets/java.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import node from "../../assets/node.svg";
import git from "../../assets/git.svg";
import cpp from "../../assets/cpp.svg";
import spring from "../../assets/spring.svg";
import docker from "../../assets/docker.svg";
import Fade from 'react-reveal/Fade';

export default function SkillsContent() {
  return (
    <div className="bg-right basis-8/12 flex flex-row justify-center">
      <Fade right>
      <div className="flex flex-col text-white w-4/6 h-full justify-center items-left">
        <h1 className="text-7xl font-bold">My Skills</h1>
        <div className="flex flex-row justify-between py-6">
          <Tech image={java} name="Java" />
          <Tech image={js} name="JavaScript" />
          <Tech image={react} name="React" />
          <Tech image={node} name="NodeJS" />
          <Tech image={git} name="Git" />
        </div>
        <h1 className="text-3xl font-medium pb-4">Currently Learning</h1>
        <div className="flex flex-row justify-between w-5/12">
          <SmallTech image={cpp} name="C++" />
          <SmallTech image={spring} name="Spring" />
          <SmallTech image={docker} name="Docker" />
        </div>
      </div>
      </Fade>
    </div>
  );
}
