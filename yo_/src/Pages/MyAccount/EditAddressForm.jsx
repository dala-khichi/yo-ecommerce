import Input from '../../Part/Utility/Input/Input'
import React, { useEffect, useState } from 'react';
import Yo from '../../Part/Utility/Axios'
import MyAccountButton from '../../Part/MyAccount/MyAccountButton'
import Checkbox from '../../Part/Utility/Checkbox';
import { useParams,useNavigate } from "react-router-dom";


const EditAddressForm = () => {

  const { id } = useParams();
  const go = useNavigate();

  const [data, setData] = useState({
    full_name: "",
    phone_number: "",
    alternate_phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    pincode: "",
    address_type: "",
    is_default: "",
  });

  const [errors, setErrors] = useState({});
  const [address_types, setAddress_types] = useState(["home", "work", "other"]);

  const validate = () => {
    const newErrors = {};

    if (!data.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!data.phone_number.trim()) newErrors.phone_number = "Phone number is required";
    else if (!/^\d{10}$/.test(data.phone_number)) newErrors.phone_number = "Phone number must be 10 digits";

if (!data.alternate_phone.trim()) newErrors.alternate_phone = "Phone number is required";
    else if (!/^\d{10}$/.test(data.alternate_phone)) newErrors.alternate_phone = "Phone number must be 10 digits";



    if (!data.address_line1.trim()) newErrors.address_line1 = "Address line 1 is required";
    if (!data.address_line2.trim()) newErrors.address_line2 = "Address line 2 is required";
    if (!data.city.trim()) newErrors.city = "City is required";
    if (!data.state.trim()) newErrors.state = "State is required";
    if (!/^\d{6}$/.test(data.pincode)) newErrors.pincode = "Pincode must be 6 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const editAddress = async () => {
    if (!validate()) return;

    try {
      const res = await Yo.put("/api/site/address/" + id, data);
      console.log(res);
      alert("Address updated successfully!");
      go("/account/address")
    } catch (error) {
      console.error(error);
      alert("Failed to update address");
    }
  };

  const fetchAddress = async () => {
    try {
      const res = await Yo.get("/api/site/address/" + id);
      console.log(res, 556);
      setData(res?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const hendleOnChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleColorChange = (option) => {
    setData({ ...data, address_type: option });
  };

  return (
    <div className="max-w-md ani mx-auto p-6 border  bg-white dark-bg">
      <h2 className="text-lg font-bold mb-4">EDIT ADDRESS</h2>

      <form className="space-y-4 text-xl">

        <Input label="full name" value={data?.full_name} error={errors.full_name}
          placeholder="full_name" onChange={(e) => hendleOnChange(e, "full_name")} />

        <Input label="phone_number" value={data?.phone_number} type='number'
          error={errors.phone_number} placeholder="phone_number" onChange={(e) => hendleOnChange(e, "phone_number")} />

        <Input label="alternate_phone" value={data?.alternate_phone} placeholder="alternate_phone"
          onChange={(e) => hendleOnChange(e, "alternate_phone")} />

        <Input label="address_line1" value={data?.address_line1} error={errors.address_line1}
          placeholder="address_line1" onChange={(e) => hendleOnChange(e, "address_line1")} />

        <Input label="address_line2" value={data?.address_line2}  error={errors.address_line1} placeholder="address_line2"
          onChange={(e) => hendleOnChange(e, "address_line2")} />

        <Input label="city" value={data?.city} error={errors.city}
          placeholder="city" onChange={(e) => hendleOnChange(e, "city")} />

        <Input label="state" value={data?.state} error={errors.state}
          placeholder="state" onChange={(e) => hendleOnChange(e, "state")} />

        <Input label="pincode" value={data?.pincode} type="number"
          error={errors.pincode} placeholder="pincode" onChange={(e) => hendleOnChange(e, "pincode")} />

        <div className="jstart gap-2 flex-row flex">
          {address_types?.map((option, i) => (
            <Checkbox
              key={i}
              value={data.address_type}
              checked={data.address_type === option}
              label={option}
              onChange={() => handleColorChange(option)}
            />
          ))}
        </div>

        <div className="mt-32">
          <MyAccountButton onClick={editAddress} text="Update Address" />
        </div>

      </form>
    </div>
  );
};

export default EditAddressForm;