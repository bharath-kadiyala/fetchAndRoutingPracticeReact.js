import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemDetailData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogItemDetailData: updatedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogItemDetailData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItemDetailData
    return (
      <div>
        <h2 className="blogItemDetails-title">{title}</h2>
        <div className="blogItemDetails-profile-con">
          <img className="blogItemDetails-logo" src={avatarUrl} alt={author} />
          <p className="blogItemDetails-author">{author}</p>
        </div>
        <img className="blogItemDetails-image" src={imageUrl} alt={title} />
        <p className="blogItemDetails-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blogItemDetails-con">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
