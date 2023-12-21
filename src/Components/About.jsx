/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about.jpg";

const imageAltText = "about image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a Microsoft Learn Student Ambassador And Campus Lead at MLS Club BVM, web developer at CodeChef BVM Chapter, and a webmaster at IEEE BVM SB, I use my skills in SQL, PHP, ReactJS, and educational technology to create and maintain websites and applications that promote coding and learning among students. I have been working in these roles for two months, and I have contributed to several projects and events that have enhanced the online presence and engagement of both organizations. I am also a core team member of the Google Developer Student Club in 2022-23. These experiences have enabled me to develop my web development, data science, graphic design, and event management competencies. I am pursuing a Bachelor of Technology in Information Technology at Birla Vishvakarma Mahavidyalaya, where I have acquired multiple certifications in SQL and Node.js. I am passionate about using technology to solve real-world problems and to empower others to learn and grow. I aim to become a proficient and innovative web developer who can create impactful and user-friendly solutions for various domains and industries.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  ".NET",
  "Web Development",
  "PHP",
  "SQL/MySQL",
  "ReactJS",
  "Tailwind CSS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "This is my personal portfolio site.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
