import { Pencil } from "lucide-react";
import {
  Link,
  Outlet
} from "react-router-dom";

const DefaultAddressCard = ({phone,address,pincode,city,state}) => {
  return (
    <div className="max-w-full  border rounded-md p-4 relative shadow-sm bg-white dark-bg">
      <h2 className="text-lg font-semibold mb-2">Adresse par défaut</h2>
      <p>Adarsh Adarsh</p>
      <p>My</p>
      <p>{city} {123029}</p>
      <p>India, {state}</p>
      <p>{phone}</p>

      <button className="absolute bottom-2 right-2 p-1 rounded hover:bg-gray-100">
      <Link to="/account/add-address">   <Pencil className="w-5 h-5" /> </Link>
      </button>
    </div>
  );
};

export default DefaultAddressCard;