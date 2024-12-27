export default function A({ message, posts }) {
  return (
    <div>
      <h1>A Components</h1>
      <p>{message}</p>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
