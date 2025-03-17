'use client'
import { useRouter } from "next/navigation";
import { FaGithub, FaEnvelope, FaAngleDoubleUp} from "react-icons/fa";
import styles from '@/styles/Footer.module.css';

function Footer() {
    const router = useRouter();
  return (
    <footer 
        className={styles.footer}
    >
      <div
        className={styles['footer-up-arrow']}
        onClick={() => router.push("/")}
      >
        <span>&uarr;</span>
      </div>
      <div className={styles['footer-icons']}>
        <a href="https://github.com/beahowel117" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:bethhowell117@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <div className={styles['footer-copyright']}>Beth Howell ©2024</div>
    </footer>
  );
}

export default Footer;
