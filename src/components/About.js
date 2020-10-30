import React from 'react';
import data from '../json/about.json';
import "./styling/About.css";

const About = () => {

  const info = data.map((person, index) => {
    return (<div key={index} className="about-div">
      <h4 key={`header-${index}`} className="about-h4">{person.name}</h4>
      <p key={`para-${index}`} className="about-p" >{person.desc}</p>
    </div>)
})

  return (
    <main className="about">
      <h1 className="about-h1">About</h1>
      {info}
    </main>
  );
}

export default About;
