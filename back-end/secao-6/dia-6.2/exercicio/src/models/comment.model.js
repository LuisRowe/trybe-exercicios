module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    message: DataTypes.STRING,
    upvoting: DataTypes.INTEGER,
    downvoting: DataTypes.INTEGER,
    accountId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Comments',
    underscored: true,
  }); 

  Comment.associate = (models) => {
    Comment.belongsTo(models.Account,
      { foreignKey: 'accountId', as: 'accounts' });
  };
 
  return Comment;
};