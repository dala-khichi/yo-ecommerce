const Role = require('../models/Role');
const rolePermissionService = require('./rolePermissionService');
const RolePermission = require('../models/RolePermission');
const log = require('../utils/logger');

const getAllRoles = async (query) => {
    return await Role.getAll(query);
};

const getRoleById = async (id) => {
    return await Role.getById(id);
};

const getRoleByIdForUpdate = async (id) => {
    return await Role.getByIdForUpdate(id);
};

const createRole = async (data,adminId) => {
  
  
   const roleId =  await Role.create(data,adminId);
    console.log(data.permissions);
    data.permissions.map(async(element)=>{
      
   const rolePermission =  await RolePermission.create({role_id:roleId,permission_id:element,created_by:adminId});
    // console.log(rolePermission);
    })
  
   // return roleId;
};

const updateRole = async (id, data) => {
    await Role.update(id, data);
};

const deleteRole = async (id) => {
    await Role.delete(id);
};

module.exports = {
    getAllRoles,
    getRoleById,
    getRoleByIdForUpdate,
    createRole,
    updateRole,
    deleteRole
};
