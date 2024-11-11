const Comment = require('../db/models/comment');
const Article = require('../db/models/articles');
const User = require('../db/models/users');

// adding a comment
const addingComment = async (req, res) => {
  try {
    const id = req.user;

    const { comment, articleId } = req.body;
    const doesExistArticle = await Article.findByPk(articleId);
    if (!doesExistArticle) {
      res.status(400).json({ status: 'failed', message: 'article not found' });
    } else {
      const newComment = await Comment.create({
        comment: comment,
        articleId: articleId,
        userId: id,
      });
      res.status(201).json({
        status: 'success',
        message: 'comment created successfully',
        comment: newComment,
      });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

// getting all comments for and article
const getCommentsOfArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const comments = await Comment.findAll({
      order: [['createdAt', 'DESC']],

      include: [
        {
          model: Article,
          as: 'article',
          attributes: ['id', 'name', 'description'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['username', 'email'],
        },
      ],
    });

    res.status(200).json({ status: 'success', comments: comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// getting single comment

const getSingleComment = async (req, res) => {
  try {
    const { id } = req.params;
    const idFound = await Comment.findByPk(id);
    if (!idFound) {
      res.status(400).json({ status: 'failed', message: 'id not found' });
    } else {
      const singleId = await Comment.findOne({
        where: { id: id },
        include: [
          {
            model: Article,
            as: 'article',
            attributes: ['id', 'name', 'description'],
          },
        ],
      });
      res
        .status(201)
        .json({ status: 'failed', message: 'success', comment: singleId });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

// editing comment
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const idExisist = await Comment.findByPk(id);
    if (!idExisist) {
      res.status(400).json({ status: 'failed', message: 'success' });
    } else {
      const { comment } = req.body;
      const editComment = await Comment.update(
        {
          comment,
        },
        { where: { id: id } }
      );
    }
    res
      .status(200)
      .json({ status: 'success', message: 'comment updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// deleteComment

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const existingId = await Comment.findByPk(id);
    if (!existingId) {
      res.status(400).json({ status: 'failed', message: 'id not found' });
    } else {
      const removeComment = await Comment.destroy({ where: { id: id } });
      res
        .status(200)
        .json({ status: 'success', message: 'comment deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

module.exports = {
  addingComment,
  getCommentsOfArticle,
  getSingleComment,
  updateComment,
  deleteComment,
};
