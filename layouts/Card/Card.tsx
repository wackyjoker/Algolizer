import React from 'react'
import styles from './Card.module.css'

const Card = () => (
  <>
    <a href="https://nextjs.org/docs" className={styles.card}>
      <h2>Documentation &rarr;</h2>
      <p>Find in-depth information about Next.js features and API.</p>
    </a>

    <a href="https://nextjs.org/learn" className={styles.card}>
      <h2>Learn &rarr;</h2>
      <p>Learn about Next.js in an interactive course with quizzes!</p>
    </a>
  </>
)

export default Card
