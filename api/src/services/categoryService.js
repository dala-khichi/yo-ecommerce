const Category = require('../models/Category');
const deleteImage = require('../utils/deleteImage')
const {log} = require('../utils/logger')

const getAllCategories = async (query) => {
    return await Category.getAll(query);
};

const getCategoryById = async (id) => {
   return await Category.getById(id);
};

const getCategoryByIdForUpdate = async (id) => {
    return await Category.getByIdForUpdate(id);
};

const createCategory = async (img,data,adminId) => {
    return await Category.create(img,data,adminId);
};

const updateCategory = async (id,img, data,adminId) => {
       if(img){
     const dImg = await Category.getImgById(id)
     await Category.update(id,img,data,adminId) 
     if(dImg) {deleteImage(dImg)};
   }else{
     await Category.updateWithoutImg(id,data,adminId);
   }
};

const deleteCategory = async (id) => {
    const dImg = await Category.getImgById(id)
                 await Category.delete(id);
                 if(dImg) {deleteImage(dImg)};
     
};









///// for main website 

const getAllX = async (query) => {
    return await Category.getAllX(query);
};







module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByIdForUpdate,
    createCategory,
    updateCategory,
    deleteCategory,
    
    
    
    
    /////
    getAllX,
};
