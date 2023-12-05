const prisma = require('../config/prisma');

const getAllCustomer = async () => {
  // const SQLQuery = 'SELECT * FROM customer';
  // return dbPool.execute(SQLQuery);
  const findManyCustomer = await prisma.customer.findMany();
  return findManyCustomer;
};

const getOneCustomer = async (idCustomer) => {
  // const SQLQuery = `SELECT * FROM customer WHERE id = ${idCustomer}`;
  // return dbPool.execute(SQLQuery);
  const findOneCustomer = await prisma.customer.findUnique({
    where: {
      id: idCustomer,
    },
  });
  return findOneCustomer;
};

const createNewCustomer = async (body) => {
  // const SQLQuery = `INSERT INTO customer (customer_name, customer_description) VALUES ('${body.customer_name}', '${body.customer_description}')`;
  // return dbPool.execute(SQLQuery);
  const createOneCustomer = await prisma.customer.create({
    data: body,
  });
  return createOneCustomer;
};

const updateCustomer = async (body, idCustomer) => {
  // const SQLQuery = `UPDATE customer SET customer_name = '${body.customer_name}', customer_description = '${body.customer_description}' WHERE id = '${idCustomer}'`;
  // return dbPool.execute(SQLQuery);
  const updateCustomerData = {
    customer_name: body.customer_name,
    customer_description: body.customer_description,
  };
  const updateOneCustomer = await prisma.customer.update({
    where: {
      id: idCustomer,
    },
    data: updateCustomerData,
  });
  return updateOneCustomer;
};

const deleteCustomer = async (idCustomer) => {
  const deleteOneCustomer = await prisma.customer.delete({
    where: {
      id: idCustomer,
    },
  });
  return deleteOneCustomer;
};

module.exports = {
  getAllCustomer,
  getOneCustomer,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};
