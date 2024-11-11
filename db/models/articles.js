'use strict';
const {
  Model ,
  Sequelize
} = require('sequelize');
const sequelize = require('../../config/database');
const Article = sequelize.define('articles', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});
Article.associate = function(models) {
  Article.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });
  Article.hasMany(models.Comment, {
    foreignKey: 'articleId',
    as: 'comments',
  });
};
module.exports = Article