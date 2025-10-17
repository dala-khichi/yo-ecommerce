import { Delete,Pencil } from "lucide-react";
import {
  Link,
  Outlet
} from "react-router-dom";

const DefaultAddressCard = ({phone,address,pincode,city,state,id ,delectOnClick,name,address_type}) => {
  return (
    <div className="max-w-full border  p-4 relative shadow-sm1 bg-white dark-bg">
      <h2 className="text-lg font-semibold mb-2">Adresse par défaut  <span className="border text-xs font-light  rounded-xl border-blue-800 px-1 py-0 text-blue-700">{address_type}</span> </h2>
      <p>{name}</p>
      <p>{address}</p>
      <p>{city} {123029}</p>
      <p>India, {state}</p>
      <p>{phone}</p>

      <button className="absolute   border bottom-2 right-2 p-1.5  hover:bg-gray-100">
      <Link to={`/account/edit-address/${id}`}>   <Pencil className="w-5 h-5" /> </Link>
      </button>
      
      <button onClick={delectOnClick} className="absolute border bottom-2 right-10 p-1.5  hover:bg-gray-100">
        <Delete className="w-5 h-5" /> 
      </button>
    </div>
  );
};

export default DefaultAddressCard;