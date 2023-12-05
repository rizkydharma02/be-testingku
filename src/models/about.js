const prisma = require('../config/prisma');

const getAllAbout = async () => {
  // const SQLQuery = 'SELECT * FROM about';

  // return dbPool.execute(SQLQuery);
  const findManyAbout = await prisma.about.findMany();
  return findManyAbout;
};

const getOneAbout = async (idAbout) => {
  // const SQLQuery = `SELECT * FROM about WHERE id=${idAbout}`;
  // return dbPool.execute(SQLQuery);
  const findOneAbout = await prisma.about.findUnique({
    where: {
      id: idAbout,
    },
  });
  return findOneAbout;
};

const createNewAbout = async (body) => {
  // const SQLQuery = `INSERT INTO about (about_fullname, about_position) VALUES ('${body.about_fullname}', '${body.about_position}')`;
  // return dbPool.execute(SQLQuery);
  const createOneAbout = await prisma.about.create({
    data: body,
  });
  return createOneAbout;
};

const updateAbout = async (body, idAbout) => {
  // const SQLQuery = `UPDATE about
  // SET about_fullname='${body.about_fullname}', about_position='${body.about_position}' WHERE id=${idAbout}`;
  // return dbPool.execute(SQLQuery);
  const updateAboutData = {
    about_fullname: body.about_fullname,
    about_position: body.about_position,
  };
  const updateOneAbout = await prisma.about.update({
    where: {
      id: idAbout,
    },
    data: updateAboutData,
  });
  return updateOneAbout;
};

const deleteAbout = async (idAbout) => {
  // const SQLQuery = `DELETE FROM about WHERE id=${idAbout}`;
  // return dbPool.execute(SQLQuery);
  const deleteOneAbout = await prisma.about.delete({
    where: {
      id: idAbout,
    },
  });
  return deleteOneAbout;
};

module.exports = {
  getAllAbout,
  getOneAbout,
  createNewAbout,
  updateAbout,
  deleteAbout,
};
