'use client';
import { useState } from "react";
import Image from 'next/image';
import styles from '../styles/Card.module.css';

// const Card = ({ frontContent, backContent }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     const handleFlip = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <div className={styles.cardContainer} onClick={handleFlip}>
//             <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
//                 <div className={styles.front}>
//                     {frontContent}
//                 </div>
//                 <div className={styles.back}>
//                     {backContent}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;

const Card = ({ image, description, title }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };


    return (
        <div className={`${styles['card-container']}`} onClick={handleFlip}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
                {/* Front Side: Image */}
                <div className={styles.front}>
                    <p className={`text-center text-white px-4 ${styles.title}`}>{title}</p>
                    <p className={`text-center text-white px-4 ${styles.description}`}>{description}</p>
                </div>
                 {/* Back Side: Description */}
                <div className={styles.back}>
                    <Image src={image.src} alt="Project Thumbnail" className="w-full h-full object-cover" width={300} height={200}/>
                </div>
             
            </div>
        </div>
    );
};

export default Card;