const prisma = require("../config/database.config");

const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const getPostById = async (id) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return { success: false, message: "ID not found" };
    } else {
      return post;
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const createPost = async (data) => {
  try {
    const post = await prisma.post.create({
      data,
    });
    return post;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const updatePost = async (id, data) => {
  try {
    const post = await prisma.post.update({
      where: {
        id,
      },
      data,
    });
    return post;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const deletePost = async (id) => {
  try {
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    return post;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};
module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };

///addresses of the server
