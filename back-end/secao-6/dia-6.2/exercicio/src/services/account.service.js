const { Account } = require('../models/');

const getById = async (id) => {
  const account = await Account.findOne({
    where: { id },
    include: { model: Profile, as: 'accountsProfile' },
  });
  return account;
}

module.exports = {
  getById,
}