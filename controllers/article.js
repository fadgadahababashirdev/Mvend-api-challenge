// articleController.js
const { Comment ,Article , User } = require('../db/models');


const createArticle = async (req, res) => {
  try {
    const { name, author, description } = req.body;
    const userId = req.user;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: 'failed',
        message: 'User not found',
      });
    }

    const createNewArticle = await Article.create({
      name,
      author,
      userId,
      description,
    });

    res.status(201).json({
      status: 'success',
      message: 'New article created successfully',
      data: createNewArticle,
    });
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};
// getting all articles
const gettingAllArticles = async (req, res) => {
  const user = req.user
 try {
    const articles = await Article.findAll({
      order: [['createdAt', 'DESC']], 
      include: [
        {
          model: Comment,
          as: 'comments',
        },
      ],
    });
     console.log("88888888",articles[4])
    res.status(200).json({
      status: 'success',
      data: articles,
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};
// get single article
const singleArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const existId = await Article.findOne({where:{id} ,include:[{
      model:Comment ,
      as:"comments"
    }]});
    if (!existId) {
      res.status(400).json({ status: 'failed', message: `id does not exist id:${id}` });
    } else {
      res.status(200).json({ status: 'success', article: existId });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

// update article

const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const numberId = await Article.findByPk(id); 
    if (!numberId) {
      res.status(400).json({ status: 'failed', message: 'id not found' });
    } else {
      const { description, name, author } = req.body;
       await Article.update(
        {
          description,
          name,
          author,
        },
        { where: { id: id } }
      );
      res
        .status(200)
        .json({ status: 'success', message: 'article updated successfully'  });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

// delete the user
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const idAvailable = await Article.findByPk(id);
    if (!idAvailable) {
      res.status(400).json({ status: 'failed', message: 'id not found' });
    } else {
       await Article.destroy({ where: { id: id } });
      res
        .status(200)
        .json({ status: 'success', message: 'article deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

module.exports = {
  createArticle,
  gettingAllArticles,
  singleArticle,
  updateArticle,
  deleteArticle,
};
