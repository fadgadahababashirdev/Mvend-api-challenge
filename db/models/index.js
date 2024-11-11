
const Article = require('./articles');
const Comment = require('./comment');
const User = require("./users")

const models = {
  Article,
  Comment,
  User,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
