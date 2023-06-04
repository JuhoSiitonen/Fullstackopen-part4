const lodash = require('lodash')

const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    const sum = (sum, item) => {
        return sum + item
    }
    return blogs.length === 0
    ? 0
    :blogs
      .map( blog => Number(blog.likes))
      .reduce(sum, 0)
}

const favoriteBlog = (blogs) => {
    const likes = blogs.map(blog => Number(blog.likes))
    const max = Math.max(...likes)
    const obj = blogs.find( blog => Number(blog.likes) === max)
    return ({
        title: obj.title,
        author: obj.author,
        url: obj.url,
        likes: obj.likes
    })
}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }