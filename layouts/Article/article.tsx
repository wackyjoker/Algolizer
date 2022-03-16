import type { FC } from 'react'
import styles from './article.module.scss'

const Article: FC = ({ children }) => (
  <div className={styles.article}>
    {children}
  </div>
)

export default Article
