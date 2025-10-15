const RolePermission = require('../models/RolePermission');

const rolePermissionService = {
  create: async (data) => {
  this.data = data;
  
  try {
    // Wait for all permission creations to complete
    const creationPromises = this.data.permissions_id.map(e => {
      return RolePermission.create({...this.data, permission_id: e.permissionId});
    });
    
    const results = await Promise.all(creationPromises);
    
    // Return all created records or just success message
    return results;
    
  } catch (error) {
    console.error('Error creating role permissions:', error);
    throw error; // Re-throw to let caller handle it
  }
},

  getAll: async () => {
    const [rows] = await RolePermission.findAll();
    return rows;
  },

  getById: async (id) => {
    const [rows] = await RolePermission.findById(id);
    return rows[0];
  },

  update: async (id, data) => {
    const [result] = await RolePermission.update(id, data);
    return result;
  },

  delete: async (id) => {
    const [result] = await RolePermission.delete(id);
    return result;
  }
};

module.exports = rolePermissionService;
