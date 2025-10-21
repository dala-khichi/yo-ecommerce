const Admin = require('../models/Admin');
const deleteImage = require('../utils/deleteImage')


const adminService = {
  createAdmin: async (img,data,adminId) => {
    console.log(img);
    const [result] = await Admin.create({...data,img:img},adminId);
    return result;
  },

  getAllAdmins: async () => {
    const [rows] = await Admin.findAll();
    return rows;
  },

  getAdminById: async (id) => {
    const [rows] = await Admin.findById(id);
    return rows[0];
  },

  updateAdmin: async (id, img,data) => {
    const [result] = await Admin.update(id, {...data,img});
    return result;
  },
 
  deleteAdmin: async (id) => {
    const [result] = await Admin.delete(id);
    return result;
  }
};

module.exports = adminService;
