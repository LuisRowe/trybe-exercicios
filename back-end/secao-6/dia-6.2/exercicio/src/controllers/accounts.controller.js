const accountsService = require('../services/account.service');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountsService.getById(id);

    if (!account) {
      return res.status(404).json({ message: 'Conta não encontrada' });
    }

    // if (req.query.includeAddresses === 'true') {
    //   const addresses = await AddressService.getAllByEmployeeId(id);
    //   return res.status(200).json({ employee, addresses });
    // }

    return res.status(200).json(account);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

const getByIdV2 = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountsService.getByIdV2(id);

    if (!account) {
      return res.status(404).json({ message: 'Conta não encontrada' });
    }

    // if (req.query.includeAddresses === 'true') {
    //   const addresses = await AddressService.getAllByEmployeeId(id);
    //   return res.status(200).json({ employee, addresses });
    // }

    return res.status(200).json(account);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

const getCommentsById = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountsService.getCommentsById(id);

    if (!account) {
      return res.status(404).json({ message: 'Conta não encontrada' });
    }

    // if (req.query.includeAddresses === 'true') {
    //   const addresses = await AddressService.getAllByEmployeeId(id);
    //   return res.status(200).json({ employee, addresses });
    // }

    return res.status(200).json(account);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

const createAccount = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;
    console.log(email);
    const account = await accountsService.createAccount(email, password, firstName, lastName, phone);

    return res.status(200).json(account);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

module.exports = {
  getById,
  getByIdV2,
  getCommentsById,
  createAccount,
};