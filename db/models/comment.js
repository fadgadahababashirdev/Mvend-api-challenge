'use strict';
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../../config/database');
const Comment = sequelize.define('comments', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  comment: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  articleId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'articles',
      key: 'id',
    },
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});

Comment.associate = function (models) {
  Comment.belongsTo(models.Article, {
    foreignKey: 'articleId',
    as: 'article',
  });


  
  Comment.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });
};

module.exports = Comment;
