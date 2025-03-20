import React from 'react';
import styles from '../../styles/AboutPage.module.css';
import Avatar from '../../components/Avatar';
import Image from 'next/image';
import "@/app/globals.css";

function SkillCard({name, src}){
  return (
    <div className={styles['skills-card']}>
      <Image src={src} alt={name} width={60} height={60}/>
        <p>{name}</p>
    </div>
  )
};

function AboutPage() {
  const skills = [
    { name: 'JavaScript', image: '/images/javascript.svg'},
    { name: 'React', image: '/images/react.svg'},
    { name: 'Redux', image: '/images/redux.svg'},
    { name: 'NextJS', image: '/images/next.svg'},
    { name: 'React Native', image: '/images/react.svg'},
    { name: 'AWS', image: '/images/aws.svg'},
    { name: 'Python', image: '/images/python.svg'},
    { name: 'MongoDB', image: '/images/mongodb.svg'},
    { name: 'Microsoft Copilot', image: '/images/copilot.svg'},
    { name: 'Node', image:'/images/node.svg'},
  ]
  
  return (
    <div className={styles.about}>
      <div className="header">About</div>
      <div className={styles.aboutContainer}>
        <div className={styles.profile}>
          <div className={`${styles.profilePicture} ${styles['fade-in-left']}`}>
            <Avatar />
          </div>
          <p className={`${styles['profile-text']} ${styles['fade-in-left']}`}>
          Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, keeping fit and playing guitar.
          </p>
        </div>
        <div className={`${styles.skills} ${styles['fade-in-right']}`}>
          <div className={styles['skills-container']}>
            {skills.slice(0,5).map((skill, index) => (
              //  <SkillCard key={index} name={skill.name} src={skill.src}/>
              <div key={index} className={styles['skills-item']}>
                <img src={skill.image} alt={skill.name} className={styles.skillImage} />
                <p className={styles['skills-item-name']}>{skill.name}</p>
              </div>
            ))}
            

          </div>
          <div className={styles['skills-container']}>
            {skills.slice(5).map((skill, index) => (
              //  <SkillCard key={index} name={skill.name} src={skill.src}/>
              <div key={index} className={styles['skills-item']}>
                <img src={skill.image} alt={skill.name} className={styles.skillImage} />
                <p className={styles['skills-item-name']}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
