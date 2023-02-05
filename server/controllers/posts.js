const {User} = require('../models/user')
const {Post} = require('../models/post')

module.exports = {
  getAllPosts: (req, res) => {
    console.log('get all posts')
  },

  getCurrentUserPosts: (req, res) => {
    console.log("current user posts")
  }, 

  addPost: async (req, res) => {
    
  }, 

  deletePost: (req,res) => {
    console.log("delete post")
  },

  editPost: (req, res) => {
    console.log("edit post")
  }
}