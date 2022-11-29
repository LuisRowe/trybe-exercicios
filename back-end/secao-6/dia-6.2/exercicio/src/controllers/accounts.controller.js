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
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

module.exports = {
  getById,
};