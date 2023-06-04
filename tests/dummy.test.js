const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})


describe('likes', () => {
    const fakeBlog = {
        "title": "blogi testi!",
        "author": "Juho Siitonen",
        "url": "www.iltalehti.fi",
        "likes": "5"
     }
     const fakeBlog2 = {
        "title": "blogi testi!",
        "author": "Juho Siitonen",
        "url": "www.iltalehti.fi",
        "likes": "5"
     }
    
    const fakeList = []
    fakeList.push(fakeBlog)
    fakeList.push(fakeBlog2)
    
    const fakelist2 = []
    fakelist2.push(fakeBlog)
    
  test('of one is equal to the value itself', () => {
    expect(listHelper.totalLikes(fakeList)).toBe(10)
  })
  test('of zero is equal to zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })
  test('of one blog is equal to the its likes', () => {
    expect(listHelper.totalLikes(fakelist2)).toBe(5)
  })
})

describe('Max likes', () => {
    const fakeBlog = {
        "title": "blogii testi!",
        "author": "Juha Siitonen",
        "url": "www.iltalehti.fi",
        "likes": "6"
     }
     const fakeBlog2 = {
        "title": "blogi testi!",
        "author": "Juho Siitonen",
        "url": "www.iltalehti.fi",
        "likes": "5"
     }
    
    const fakeList = []
    fakeList.push(fakeBlog)
    fakeList.push(fakeBlog2)
    
    const fakelist2 = []
    fakelist2.push(fakeBlog)

  test('of one blog is its own likes', () => {
    expect(listHelper.favoriteBlog(fakeList)).toEqual(fakeBlog)
  })
})

/*
describe('Most Blogs', () => {
    const fakeBlog = {
        title: "blogii testi!",
        author: "Juha Siitonen",
        url: "www.iltalehti.fi",
        likes: "6"
     }
     const fakeBlog2 = {
        title: "blogi testi!",
        author: "Juho Siitonen",
        url: "www.iltalehti.fi",
        likes: "5"
     }
    
    const fakeList = []
    fakeList.push(fakeBlog)
    fakeList.push(fakeBlog2)
    fakeList.push(fakeBlog)
    
    const fakelist2 = []
    fakelist2.push(fakeBlog)

    test('most blogs written by', () => {
        expect(listHelper.mostBlogs(fakeList).toBe(1))
    })
    
})
*/