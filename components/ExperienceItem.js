import styles from "@/styles/Experience.module.css";

function ExperienceItem({ title, company, description }) {
    return (
      <div className={styles.experienceItem}>
        <h3 className="kaushan-text text-center text-black">{title}</h3>
        <h5 className="kaushan-text text-center text-black">{company}</h5>
        <p className="kaushan-text text-center text-black">{description}</p>
      </div>
    );
  };

  export default ExperienceItem