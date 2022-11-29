const { Address, Employee } = require('../models/');

const Sequelize = require('sequelize');
const config = require('../config/config')

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env])

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    include: { model: Address, as: 'addresses' },
  });
  return employee;
}

const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  // COM ATOMICIDADE MANAGED

  try {
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create(
        { firstName, lastName, age },
        { transaction: t },
      );

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });
      return employee;
    })
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }

  // COM ATOMICIDADE UNMANAGED
  // try {
  //   const employee = await Employee.create(
  //     { firstName, lastName, age },
  //     { transaction: t },
  //   );

  //   await Address.create(
  //     { city, street, number, employeeId: employee.id },
  //     { transaction: t },
  //   );

  //   await t.commit();

  //   return employee;

  // } catch (e) {
  //   await t.rollback();
  //   console.log(e);
  //   throw e;
  // }

  // SEM ATOMICIDADE
  // const employee = await Employee.create({ firstName, lastName, age });

  // await Address.create({ city, street, number, employeeId: employee.id });
  // return employee;

};

module.exports = { getAll, getById, insert };