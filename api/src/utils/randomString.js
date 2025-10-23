const randomString = () => {
  return Math.random().toString(36).substring(2, 10);
};



const expiryDate = (time)=>{ return new Date(Date.now() + 60 * 60 * 1000 * time); }



export  {randomString,expiryDate}