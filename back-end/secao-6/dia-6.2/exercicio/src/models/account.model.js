module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },{
    timestamps: false,
    tableName: 'Accounts',
    underscored: true,
  }); 

  Account.associate = (models) => {
    Account.hasOne(models.Profile,
      { foreignKey: 'accountId', as: 'accountsProfile' });
  };

  Account.associate = (models) => {
    Account.hasMany(models.Comment,
      { foreignKey: 'accountId', as: 'accountsComment' });
  };
 
  return Account;
};