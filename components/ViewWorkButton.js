"use client"
import React from 'react'
import Link from "next/link";
import styles from '../styles/ViewWorkButton.module.css';


function ViewWorkButton() {
  return (
    <div className={styles.viewButton} >
        <button className={styles.button}>
            <Link href="/about" scroll={true}>
              View My Work
            </Link>
        </button>
    </div>
  )
}

export default ViewWorkButton

//className='bg-slate-950 text-red-500'