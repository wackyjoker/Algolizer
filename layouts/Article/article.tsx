import type { FC } from 'react'
import styles from './article.module.scss'

const Article: FC = ({ children }) => (
  <article className={styles.article}>
    {children}
  </article>
)

export default Article
