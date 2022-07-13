import React from 'react'
import styles from '../styles/Home.module.css';
import Bottom from './bottom';
import Middle from './Middle';
import Top from './Top';

function MainContent() {
  return (
    <div className={styles.maincontent}>

      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  )
}

export default MainContent