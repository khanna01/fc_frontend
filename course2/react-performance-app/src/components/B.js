import { memo, useCallback } from 'react'

const Message = memo(({ message }) => {
  return <p>{message}</p>
})

const ListItem = memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  )
})

const List = memo(({ posts }) => {
  console.log('List Components')
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  )
})

export default function B({ message, posts }) {
  console.log('B Components')
  const testFunction = useCallback(() => {}, [])

  return (
    <div>
      <h1>B Components</h1>
      <Message message={message} />
      <List posts={posts} testFunction={testFunction} />
    </div>
  )
}
