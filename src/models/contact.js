const prisma = require('../config/prisma');

const getAllContact = async () => {
  // const SQLQuery = 'SELECT * FROM contact';
  // return dbPool.execute(SQLQuery);
  const findManyContact = await prisma.contact.findMany();
  return findManyContact;
};

const getOneContact = async (idContact) => {
  // const SQLQuery = `SELECT * FROM contact WHERE id=${idContact}`;
  // return dbPool.execute(SQLQuery);
  const findOneContact = await prisma.contact.findUnique({
    where: {
      id: idContact,
    },
  });
  return findOneContact;
};

const createNewContact = async (body) => {
  // const SQLQuery = `INSERT INTO contact (contact_fullname, contact_email, contact_phone, contact_message) VALUES ('${body.contact_fullname}', '${body.contact_email}', '${body.contact_phone}', '${body.contact_message}')`;
  // return dbPool.execute(SQLQuery);
  const createOneContact = await prisma.contact.create({
    data: body,
  });
  return createOneContact;
};

const updateContact = async (body, idContact) => {
  // const SQLQuery = `UPDATE contact SET contact_fullname = '${body.contact_fullname}', contact_email = '${body.contact_email}', contact_phone = '${body.contact_phone}', contact_message = '${body.contact_message}' WHERE id = '${idContact}'`;
  // return dbPool.execute(SQLQuery);
  const updateContactData = {
    contact_fullname: body.contact_fullname,
    contact_email: body.contact_email,
    contact_phone: body.contact_phone,
    contact_message: body.contact.message,
  };

  const updateOneContact = await prisma.contact.update({
    where: {
      id: idContact,
    },
    data: updateContactData,
  });
  return updateOneContact;
};

const deleteContact = async (idContact) => {
  // const SQLQuery = `DELETE FROM contact WHERE id=${idContact}`;
  // return dbPool.execute(SQLQuery);
  const deleteOneContact = await prisma.contact.delete({
    where: {
      id: idContact,
    },
  });
  return deleteOneContact;
};

module.exports = {
  getAllContact,
  getOneContact,
  createNewContact,
  updateContact,
  deleteContact,
};
