import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="grid grod-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 w-full h-[1300px] md:h-full gap-5 items-center justify-center">
      <ProjectCard 
        title="LIFX Spotify Show" 
        description="A web app built with Pug.js and a NodeJS backend utilizing SpotifyOAuth and Spotify Web API to fetch user's currently playing track and visualize properties onto a LIFX lightbulb."
        stack={[
          { 'name': 'HTML', 'text': '#412d23', 'background': '#f06529', 'width': 50 },
          { 'name': 'CSS', 'text': '#264de4', 'background': '#74bce9', 'width': 35 },
          { 'name': 'NodeJS', 'text': '#336633', 'background': '#66cc33', 'width': 65 },
          { 'name': 'Express', 'text': '#5A5A5A', 'background': '#D3D3D3', 'width': 65 }
        ]}
      />
      <ProjectCard 
        title="LIFX Audio Show" 
        description="A PyQtGraph GUI to retrieve computer audio input using PyAudio and dynamically animate input onto LIFX lightbulbs through Fast Fourier Transformation. Features full control of LIFX lightbulbs status and properties."
        stack={[
          { 'name': 'Python', 'text': '#0d1c4d', 'background': '#2463f2', 'width': 60 },

        ]}
      />
      <ProjectCard 
        title="Portfolio" 
        description="My personal portfolio that I designed on Notion and modified to fit my style. Practice with building from design, componentizing, and TailwindCSS grid."
        stack={[
          { 'name': 'React', 'text': '#2463f2', 'background': '#61dafb', 'width': 55 },
          { 'name': 'Typescript', 'text': '#0d1c4d', 'background': '#007acc', 'width': 85 },
          { 'name': 'TailwindCSS', 'text': '#264de4', 'background': '#79c2fa', 'width': 95 },
        ]}
      />
      {/* <ProjectCard 
        title="ReserveTufts" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"
        stack={[
          { 'name': 'Python', 'text': '#0d1c4d', 'background': '#2463f2', 'width': 60 },
          { 'name': 'Selenium', 'text': '#384727', 'background': '#3a887c', 'width': 80 },
        ]}
      /> */}
    </div>
  )
}

export default Projects;
