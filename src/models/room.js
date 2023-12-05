const prisma = require('../config/prisma');

const getAllRoom = async () => {
  // const SQLQuery = 'SELECT * FROM room';
  // return dbPool.execute(SQLQuery);
  const findManyRoom = await prisma.room.findMany();
  return findManyRoom;
};

const getOneRoom = async (idRoom) => {
  // const SQLQuery = `SELECT * FROM room WHERE id = ${idRoom}`;
  // return dbPool.execute(SQLQuery);
  const findOneRoom = await prisma.room.findUnique({
    where: {
      id: idRoom,
    },
  });
  return findOneRoom;
};

const createNewRoom = async (body) => {
  // const SQLQuery = `INSERT INTO room (room_type, room_price) VALUES ('${body.room_type}', '${body.room_price}')`;
  // return dbPool.execute(SQLQuery);
  const createOneRoom = await prisma.room.create({
    data: body,
  });
  return createOneRoom;
};

const updateRoom = async (body, idRoom) => {
  // const SQLQuery = `UPDATE room SET room_type = '${body.room_type}', room_price = '${body.room_price}' WHERE id = '${idRoom}'`;
  // return dbPool.execute(SQLQuery);
  const updateRoomData = {
    room_type: body.room_type,
    room_price: body.room.price,
  };

  const updateOneRoom = await prisma.room.update({
    where: {
      id: idRoom,
    },
    data: updateRoomData,
  });
  return updateOneRoom;
};

const deleteRoom = async (idRoom) => {
  // const SQLQuery = `DELETE FROM room WHERE id=${idRoom}`;
  // return dbPool.execute(SQLQuery);
  const deleteOneRoom = await prisma.room.delete({
    where: {
      id: idRoom,
    },
  });
  return deleteOneRoom;
};

module.exports = {
  getAllRoom,
  getOneRoom,
  createNewRoom,
  updateRoom,
  deleteRoom,
};
