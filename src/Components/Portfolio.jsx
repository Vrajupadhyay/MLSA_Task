/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "desk image with computer, notebook";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Portfolio site",
    description:
      "This is my personal portfolio site. It was created using React and deployed to Netlify.", 
    url: "https://vrajupadhyay.netlify.app",
  },
  {
    title: "IEEE BVM SB Website",
    description:
      "This is the website for IEEE BVM SB. It was created using PHP and deloyed on the hostinger server.",
    url: "https://ieeebvm.in",
  },
  {
    title: "NSFT IEEE BVM SB Website",
    description:
      "This is website for the NSFT'23 event organised by IEEE BVM SB. It was created for the event registration and payment. It was created using PHP and deployed on the hostinger server.",
    url: "https://nsft.ieeebvm.in",
  },
  {
    title: "Resume Website",
    description:
      "This is my resume website. It was created using HTML, CSS and JavaScript and deployed to Hostinger.",
    url: "https://vrajupadhyay.ieeebvm.in",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
