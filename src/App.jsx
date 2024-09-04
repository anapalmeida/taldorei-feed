import { useRef, useState } from 'react'

import Post from './components/Post/Post'
import RootLayout from './layouts/RootLayout/RootLayout'
import Textarea from './components/Textarea/Textarea'
import data from './store/database.json'
import styles from './App.module.css'

function App() {
  const [posts, setPosts] = useState(data)
  const [newPost, setNewPost] = useState('')
  const newPostRef = useRef(null)

  const handleSubmitPost = (e) => {
    e.preventDefault()

    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        name: 'Laudna',
        profilePic: 'https://i.imgur.com/BHOVUB4.jpg',
        role: 'Hollow One sorcerer/warlock and a member of Bells Hells',
        content: newPost,
        dateTime: new Date(),
        comments: [],
      },
    ])
  }

  const NewPostButton = () => {
    return (
      <button
        onClick={() => {
          newPostRef.current.focus()
        }}
        className={styles.addPost}
      >
        +
      </button>
    )
  }

  return (
    <RootLayout>
      <NewPostButton />

      <section className={styles.postForm}>
        <Textarea
          ref={newPostRef}
          backgroundColor={'var(--grey-800)'}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder={'What’s happening?'}
          onSubmit={handleSubmitPost}
        />
      </section>

      <section style={{ boxSizing: 'border-box', width: 'f-content' }}>
        {Array.isArray(posts) &&
          posts?.map((p) => (
            <Post
              key={p.id}
              comments={p.comments}
              author={p.name}
              dateTime={p.dateTime}
              profilePic={p.profilePic}
              role={p.role}
              content={p.content}
            />
          ))}
      </section>
    </RootLayout>
  )
}

export default App
