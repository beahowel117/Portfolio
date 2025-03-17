'use client';

import Image from "next/image";
import styles from "@/styles/Experience.module.css";
import resume from "../../public/Images/resume.png";
import Card from "../../components/Card";
import CardGrid from "@/components/CardGrid";

export default function Experience() {

  const projects = [
    {
        // image: "/images/project1.jpg",
        description: "This is the description for Project 1.",
    },
    {
        // image: "/images/project2.jpg",
        description: "This is the description for Project 2.",
    },
    {
        // image: "/images/project3.jpg",
        description: "This is the description for Project 3.",
    },
];
  return (
    <div className={styles.resumePage}>
      <h3 className= "header mb-6 text-center">Experience</h3>
      <div className={styles.resumeCard}>
        <Image
          src={resume}// Replace with the path to your resume image
          alt="Resume Preview"
          width={800} // Adjust to match your image size
          height={1000} // Adjust to match your image size
          className={styles.resumeImage}
        />
        <a
          href="" // Path to your downloadable resume
          target="_blank"
          rel="noopener noreferrer"
          className={styles['resume-button']}
        >
          Download Resume
        </a>
      </div>
      <h3 className= "header mb-6 text-center">Projects</h3>
      {/* <div className="flex">
      
      <Card />
      <Card />
      <Card />
      </div> */}
         <div className="flex flex-wrap justify-center">
            {/* {projects.map((project, index) => (
                <Card key={index} description={project.description} />
            ))} */}
            <CardGrid />        
         </div>
    </div>
  );
}
