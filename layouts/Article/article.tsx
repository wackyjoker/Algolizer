import type { FC } from 'react'
import styles from './article.module.scss'

const Article: FC = ({ children }) => (
  <div className={styles.main}>
    {children}
  </div>
)

export default Article
