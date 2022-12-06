const { Account, Profile, Comment, sequelize } = require('../models/');

const getById = async (id) => {
  const account = await Account.findOne({
    where: { id },
    include: [{ model: Profile, as: 'profile' }],
  });

  return account;
}

const getByIdV2 = async (id) => {
  const account = await Account.findOne({
    where: { id },
  });

  return account;
}

const getCommentsById = async (id) => {
  const account = await Comment.findAll({
    where: { accountId: id },
  });

  return account;
}

const createAccount = async (email, password, firstName, lastName, phone) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const account = await Account.create(
        { email, password },
        { transaction: t },
      );

      const profile = await Profile.create({
        firstName, lastName, phone, accountId: account.id
      }, { transaction: t });

      return {...account.dataValues, ...profile.dataValues};
    })
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

module.exports = {
  getById,
  getByIdV2,
  getCommentsById,
  createAccount,
}