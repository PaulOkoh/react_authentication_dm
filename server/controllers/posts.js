module.exports = {
  getAllPosts: (req, res) => {
    console.log('get all posts')
  },

  getCurrentUserPosts: (req, res) => {
    console.log("current user posts")
  }, 

  addPost: (req, res) => {
    console.log("add post")
  }, 

  deletePost: (req,res) => {
    console.log("delete post")
  }
}