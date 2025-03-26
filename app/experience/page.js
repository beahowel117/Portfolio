'use client';

import Image from "next/image";
import styles from "@/styles/Experience.module.css";
import resume from "../../public/Images/resume.png";
import CardGrid from "@/components/CardGrid";
import ExperienceItem from "@/components/ExperienceItem";

export default function Experience() {

  return (
    <div className={styles.resumePage}>
      <h3 className= "header mb-6 text-center">Experience</h3>
      <div>
        <a
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles['resume-button']}
          >
            Download Resume
          </a>
      </div>
      <div className={styles.resumeCard}>
         <div className={styles.experienceContainer}>
          <ExperienceItem 
            title="Backend Engineer - Contributor"
            company="MetaPause"
            description="Developed REST API endpoints to enhance integration between web and mobile applications. Leveraged Node.js, Express, Swagger, and Sequelize to implement robust backend logic and optimize database interactions. Improved performance and scalability, leading to faster data retrieval and reduced server load."
          />
          <ExperienceItem 
            title="Technical Team Lead"
            company="New York Life"
            description="Directed a team of developers to deliver client-facing projects, ensuring seamless migrations and alignment with business goals. Managed project timelines, facilitated agile ceremonies, and mentored junior engineers, improving team productivity and client satisfaction."
          />
          <ExperienceItem 
            title="Front-End & Cloud Engineer"
            company="New York Life"
            description="Developed and deployed a responsive client-facing product using React and Redux, boosting customer engagement and sales by 30%. Led performance optimization efforts, reducing load times and improving user retention. Integrated RESTful APIs for seamless client interactions and optimized data exchange."
          />
          <ExperienceItem 
            title="Creator & Developer"
            company="Metrotek"
            description="Owned the full development lifecycle of a responsive website, ensuring high quality and timely delivery. Managed client communication, gathered requirements, and handled hosting and DNS configurations for a smooth deployment experience."
          />
        </div>

        {/* <a
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles['resume-button']}
        >
          Download Resume
        </a> */}
      </div>
      <h3 className= "header mb-6 text-center">Projects</h3>
         <div className="flex flex-wrap justify-center">
            <CardGrid />        
         </div>
    </div>
  );
}
