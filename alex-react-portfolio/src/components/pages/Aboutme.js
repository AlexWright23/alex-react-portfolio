import React from 'react';
import me from '../../images/me.jpg';

export default function About() {
  return (
    <div className='aboutMe'>
      <div className='col-md-12 row justify-content-center'>
        <p className='col-md-6'>
       Hello! My name is Alex Wright, I am Full Stack Development student at THE Ohio State University! I've learned a wide range of skills during my time in this bootcamp, which include, Full-Stack Web Development, React, Express, Javascript, Web API's, SQL, NoSQL, PWA's, Node, and more! I plan to expand my knowledge and dive into more languages after completing this bookcamp. On my portfolio page, you can see some of my recent work and projects. Please reach out to me via the contact page, if you have any questions, collaberation ideas, job offers or just want to touch base with me! Thanks!
        </p>
        <div className='col-md-3'>
          <img src={me} className="me" alt="Alex" width="285" height="325"></img>
        </div>
      </div>
    </div>
  );
}
































