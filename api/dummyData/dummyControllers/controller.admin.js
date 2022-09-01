const fs = require('fs');
const path = require('node:path');
let data = fs.readFileSync(path.join(__dirname, '..', 'dummyModels', 'Admin.json'));
let Admins = JSON.parse(data);

const controllerAdmins = {
  getAll: async (req, res, next) => {
    try {
      res.status(200).send({ data: Admins });
    } catch (error) {
      console.log(error);
    }
  },
  createAdmin: async (req, res, next) => {
    const { name, email, password } = req.body;
    let letters = "0123456789ABCDEF";
    var objectId = "630fff";
    for (var i = 0; i < 8; i++) {
      objectId += letters[Math.floor(Math.random() * 16)];
    }
    const newAdmin = {
      id: objectId,
      name,
      email,
      password,
      active: true,
    };
    try {
      Admins.push(newAdmin);
      let jsonAdmins = JSON.stringify(Admins);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Admin.json'), jsonAdmins, (err) => {
        if (err) throw err;
        console.log("Admin created");
      });
      res.status(200).send({ newAdmin: newAdmin });
    } catch (error) {
      console.log(error);
    }
  },
  getAdmin: async (req, res, next) => {
    const { idAdmin } = req.params;
    try {
      const AdminFound = Admins.find((Admin) => Admin.id === idAdmin);
      console.log(AdminFound);
      res.status(200).send({ data: AdminFound });
    } catch (error) {
      console.log(error);
    }
  },
  updateAdmin: async (req, res, next) => {
    const { idAdmin } = req.params;
    const { name, email, password} = req.body;
    try {
      const AdminFound = Admins.find((Admin) => Admin.id === idAdmin);
      AdminFound.name = name;
      AdminFound.email = email;
      AdminFound.password = password;
      let jsonAdmins = JSON.stringify(Admins);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Admin.json'), jsonAdmins, (err) => {
        if (err) throw err;
        console.log("Admin updated");
      });
      res.status(200).send({ data: AdminFound });
    } catch (error) {
      console.log(error);
    }
  },
  deleteAdmin: async (req, res, next) => {
    const { idAdmin } = req.params;
    try {
      const AdminFound = Admins.find((Admin) => Admin.id === idAdmin);
      AdminFound.active = false;
      let jsonAdmins = JSON.stringify(Admins);
      fs.writeFile(path.join(__dirname, '..', 'dummyModels', 'Admin.json'), jsonAdmins, (err) => {
        if (err) throw err;
        console.log("Admin banned");
      });
      res.status(200).send({ data: AdminFound });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controllerAdmins;
