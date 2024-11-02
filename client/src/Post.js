import React from 'react'

const Post = ({ title, summary, content, cover, createdAt }) => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://blogs.incarail.com/hubfs/laguna-humantay-como-llegar-altitud-y-curiosidades-large-gps55i05c7.jpeg" alt="" />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a href="" className="author">Thomas</a>
          <time datetime="">{createdAt}</time>
        </p>
        <p className="summary">{summary}
        </p>
      </div>
    </div>

  )
}

export default Post