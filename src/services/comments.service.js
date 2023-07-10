const prisma = require("../config/database.config");

const getComments = async () => {
  try {
    const comments = await prisma.comment.findMany();
    return comments;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const getCommentById = async (id) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id,
      },
    });
    if (!comment) {
      return { success: false, message: "ID not found" };
    } else {
      return comment;
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const createComment = async (data) => {
  try {
    const comment = await prisma.comment.create({
      data,
    });
    return comment;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const updateComment = async (id, data) => {
  try {
    const comment = await prisma.comment.update({
      where: {
        id,
      },
      data,
    });
    return comment;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const deleteComment = async (id) => {
  try {
    const comment = await prisma.comment.delete({
      where: {
        id,
      },
    });
    return comment;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};
module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};

///addresses of the server
