import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <section
    style={{
      backgroundImage: `url(${article.backgroundUrl})`
    }}
  >
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
  </section>
)

  //<div className={styles.preview}>
    //<Img alt="" sizes={article.heroImage.sizes} />
    //<h3 className={styles.previewTitle}>
      //<Link to={`/blog/${article.slug}`}>{article.title}</Link>
    //</h3>
    //<small>{article.publishDate}</small>
    //<p
      //dangerouslySetInnerHTML={{
        //__html: article.description.childMarkdownRemark.html,
      //}}
    ///>
  //</div>
