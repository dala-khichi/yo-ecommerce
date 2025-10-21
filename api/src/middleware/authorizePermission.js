const db = require('../config/db'); // MySQL connection instance

const authorizePermission = (requiredPermissions = []) => {
  return async (req, res, next) => {
    try {
      // Normalize required permissions to array and lowercase
      const permissions = (Array.isArray(requiredPermissions) 
        ? requiredPermissions 
        : [requiredPermissions]).map(p => p.toLowerCase().trim());

      const adminId = req.admin?.id;

      if (!adminId) {
        return res.status(401).json({ message: 'Unauthorized: No admin ID found' });
      }

      // Get admin's role_id
      const [adminResult] = await db.execute(
        'SELECT role_id FROM admins WHERE id = ?',
        [adminId]
      );

      if (!adminResult.length) {
        return res.status(404).json({ message: 'Admin not found' });
      }

      const roleId = adminResult[0].role_id;

      // Get all permissions for the role
      const [permResult] = await db.execute(
        `SELECT p.name FROM permissions p
         JOIN role_permissions rp ON p.id = rp.permission_id
         WHERE rp.role_id = ?`,
        [roleId]
      );

      // Normalize user's permissions to lowercase
      const userPermissions = permResult.map(p => p.name.toLowerCase().trim());

      // Check if any required permission exists in user's permissions
      const hasPermission = permissions.some(requiredPerm => 
        userPermissions.includes(requiredPerm)
      );

      if (!hasPermission) {
        return res.status(403).json({ 
          message: `Access Denied: Requires one of these permissions - ${permissions.join(', ')}`
        });
      }

      next();
    } catch (err) {
      console.error('Permission Check Error:', err);
      res.status(500).json({ 
        message: 'Internal Server Error during permission verification' 
      });
    }
  };
};

module.exports = authorizePermission;