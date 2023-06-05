import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <Link to={`blogs/${id}`} className="link-sty">
      <div className="blogItem-con">
        <img className="blogItem-img" src={imageUrl} alt={`item${id}`} />
        <div className="blogItem-text-con">
          <p className="blogItem-topic">{topic}</p>
          <p className="blogItem-title">{title}</p>
          <div className="blogItem-profile-con">
            <img
              className="blogItem-logo"
              src={avatarUrl}
              alt={`avatar${id}`}
            />
            <p className="blogItem-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
