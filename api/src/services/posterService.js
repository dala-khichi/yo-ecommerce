const Poster = require('../models/Poster');
const deleteImage = require('../utils/deleteImage')

const posterService = {
  createPoster: async (img,data,adminId) => {
    
    const [result] = await Poster.create(img,data,adminId);
    return result;
  },

  getAllPosters: async () => {
    const [rows] = await Poster.findAll();
    return rows;
  },

  getPosterById: async (id) => {
    const [rows] = await Poster.findById(id);
    return rows[0];
  },

  getPosterByIdForUpdate: async (id) => {
    const [rows] = await Poster.findByIdForUpdate(id);
    return rows[0];
  },

  updatePoster: async (id,img ,data,adminId) => {
    
    if(img){
     const dImg = await Poster.getImgById(id)
     await Poster.update(id,img,data,adminId) 
     if(dImg) {deleteImage(dImg)};
   }else{
     await Poster.updateWithoutImg(id,data,adminId);
   }
    
  },

  deletePoster: async (id) => {
    
    const dImg = await Poster.getImgById(id)
                 await Poster.delete(id);
                 if(dImg) {deleteImage(dImg)};
    
    //const [result] = await Poster.delete(id);
    //return result;
  },
  
  /////for main site 
  
  getAllX: async () => {
    const [rows] = await Poster.getAllX();
    return rows;
  },
  
  
  
  
};

module.exports = posterService;
