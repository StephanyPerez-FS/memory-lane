import React from "react"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"

const posts = [
  { title: "Post 1", slug: "post1", excerpt: "This is the first post." },
  { title: "Post 2", slug: "post2", excerpt: "This is the second post." },
  { title: "Post 3", slug: "post3", excerpt: "This is the third post." },
]

const HomePage = () => (
  <Layout>
    <h1>Memory Lane</h1>
    {posts.map(post => (
      <PostPreview
        key={post.slug}
        title={post.title}
        excerpt={post.excerpt}
        slug={`/posts/${post.slug}`}
      />
    ))}
  </Layout>
)

export default HomePage
