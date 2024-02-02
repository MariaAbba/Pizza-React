import React from 'react'
import styles from './../NotFoundBlock/NotFoundBlock.module.scss'


const index = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😢</span>
        <br />
        Nothing To Display
      </h1>
      <p className={styles.description}>The Page Cannot Be Found</p>
    </div>
  )
}

export default index