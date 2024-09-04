import PropTypes from 'prop-types'
import Textarea from '../Textarea/Textarea'
import styles from './Post.module.css'
import { useState } from 'react'

function Post({ comments, author, profilePic, role, content, dateTime }) {
  const [comment, setComment] = useState('')
  const [commentsList, setCommentsList] = useState(comments)

  console.log(commentsList)

  const Comment = ({ id, profilePic, name, content, dateTime, likes }) => {
    return (
      <div key={id} className={styles.comment}>
        <a href="#">
          <img
            className={styles.avatar}
            src={profilePic}
            alt={name}
          />
        </a>
        <div className={styles.commentBody}>
          <div className={styles.commentHeader}>
            <a href="#">
              <strong>{name}</strong>
              <span>(você)</span>
            </a>
            <span>{dateTime}</span>
          </div>
          <p>{content}</p>
        </div>
      </div>
    )
  }

  const handleSendComment = (e) => {
    setComment(e.target.value)
  }

  const onSubmitComment = (e) => {
    e.preventDefault()
    setCommentsList([
      ...commentsList,
      {
        id: commentsList.length + 1,
        profilePic: 'https://i.imgur.com/BHOVUB4.jpg',
        name: 'Laudna (você)',
        content: comment,
        dateTime: new Date(),
        likes: [
          {
            quantity: 0,
          },
        ],
      },
    ])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <a href="#">
            <img className={styles.avatar} src={profilePic} alt={author} />
          </a>
          <div className={styles.authorInfo}>
            <a href="#">
              <strong>{author}</strong>
            </a>
            <span>{role}</span>
          </div>
        </div>
        <time title="13 de Agosto às 08:13h" dateTime={dateTime}>
          1h
        </time>
      </header>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <div className={styles.commentForm}>
        <div className={styles.divider} />

        <Textarea
          onSubmit={(e) => onSubmitComment(e)}
          value={comment}
          onChange={(e) => handleSendComment(e)}
          label={'Leave a comment'}
          placeholder={'Write a comment...'}
        />

        <div className={styles.commentList}>
          {commentsList?.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      </div>
    </article>
  )
}

Post.propTypes = {
  comments: PropTypes.array.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
}

export default Post
