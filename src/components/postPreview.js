import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ title, excerpt, slug }) => (
  <div>
    <h2>{title}</h2>
    <p>{excerpt}</p>
    <Link to={slug}>Read More</Link>
  </div>
)

export default PostPreview
