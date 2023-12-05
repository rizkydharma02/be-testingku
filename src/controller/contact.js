const ContactModel = require('../models/contact');

const getAllContact = async (req, res) => {
  try {
    const [data] = await ContactModel.getAllContact();

    res.status(200).send(
      JSON.stringify({
        message: 'Get All Contact Successfully',
        data: data,
      })
    );
  } catch (err) {
    res.status(500).send(
      JSON.stringify({
        message: 'Server Error',
        serverMessage: err,
      })
    );
  }
};

const getOneContact = async (req, res) => {
  const { idContact } = req.params;
  try {
    const [data] = await ContactModel.getOneContact(idContact);
    res.status(200).send(
      JSON.stringify({
        message: 'Get One Contact Successfully',
        data: data,
      })
    );
  } catch (err) {
    res.status(500).send(
      JSON.stringify({
        message: 'Server Error',
        serverMessage: err,
      })
    );
  }
};

const createNewContact = async (req, res) => {
  const { body } = req;

  if (!body.contact_fullname || !body.contact_email || !body.contact_phone || !body.contact_message) {
    res.status(400).send(
      JSON.stringify({
        message: 'You Submitted Incorrect Data!',
        data: null,
      })
    );
  }
  try {
    await ContactModel.createNewContact(body);
    res.status(201).send(
      JSON.stringify({
        message: 'Create New Contact Successfully',
        data: body,
      })
    );
  } catch (err) {
    res.status(500).send(
      JSON.stringify({
        message: 'Server Error',
        serverMessage: err,
      })
    );
  }
};

const updateContact = async (req, res) => {
  const { idContact } = req.params;
  const { body } = req;

  if (!body.contact_fullname || !body.contact_email || !body.contact_phone || !body.contact_message) {
    res.status(400).send(
      JSON.stringify({
        message: 'You Submitted Incorrect Data!',
        data: null,
      })
    );
  }
  try {
    await ContactModel.updateContact(body, idContact);
    res.status(201).send(
      JSON.stringify({
        message: 'Update Contact Successfully',
        data: {
          id: idContact,
          ...body,
        },
      })
    );
  } catch (err) {
    res.status(500).send(
      JSON.stringify({
        message: 'Server Error',
        serverMessage: err,
      })
    );
  }
};

const deleteContact = async (req, res) => {
  const { idContact } = req.params;
  try {
    await ContactModel.deleteContact(idContact);
    res.status(200).send(
      JSON.stringify({
        message: 'Delete Contact Successfully',
        data: null,
      })
    );
  } catch (err) {
    res.status(500).send(
      JSON.stringify({
        message: 'Server Error',
        serverMessage: err,
      })
    );
  }
};

module.exports = {
  getAllContact,
  getOneContact,
  createNewContact,
  updateContact,
  deleteContact,
};
