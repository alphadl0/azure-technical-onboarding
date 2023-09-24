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
import image from "../images/digitalart.jpg";

const imageAltText = ".";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a 2nd year Management Information Systems (MIS) student at Dokuz Eylül University, focusing on cybersecurity. I love learning and applying new technologies to solve real-world problems";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Cloud security",
  "Incident Response",
  "Vulnerability Assessment",
  "Security Policies and Compliance",
  "Security Information and Event Management (SIEM)",
  "Identity and Access Management (IAM)",
  "Penetration Testing and Ethical Hacking",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  " As a passionate and dedicated student in Information Systems, I am sharpening my expertise in cybersecurity through rigorous coursework, hands-on projects, and a commitment to staying up-to-date with the latest industry trends and best practices. I have a strong foundation in the technical and theoretical aspects of cybersecurity, and I am eager to learn more and gain real-world experience. My commitment to the world of cybersecurity extends beyond the classroom. I am eager to leverage my skills and knowledge to contribute to the ever-evolving landscape of digital security.";

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
