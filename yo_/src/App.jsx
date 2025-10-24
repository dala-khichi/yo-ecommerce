import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import { useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';
import { AuthProvider } from "./Context/AuthContext";

import eruda from "eruda"; 

import './App.css'

// Layouts
import DefaultLayout from './Layout/DefaultLayout'
import AuthLayout from './Layout/AuthLayout'
import AccountLayout from './Layout/AccountLayout'

// Pages
import Hero from './Pages/Hero/Hero'
import Login from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
import Item from './Pages/Item/Item'
import Items from './Pages/Items/Items'
import CheckOut from './Pages/ChackOut/CheckOut'
import MyAccount from './Pages/MyAccount/MyAccount'
import MyInformation from './Pages/MyAccount/MyInformation'
import MyAddress from './Pages/MyAccount/MyAddress'
import MyOrder from './Pages/MyAccount/MyOrder'
import AddAddressForm from './Pages/MyAccount/AddAddressForm'
import TrackOrder from './Pages/MyAccount/TrackOrder'
import ProtecRoute from './Part/Utility/ProtecRoute'
import ItemDisplay from './TestComponent/Test2/ProductCard'
import EditAddressForm from "./Pages/MyAccount/EditAddressForm";
import OrderSuccess from "./Pages/ChackOut/OrderSuccess";






function App() {
  
   
  
  useEffect(() => {
    eruda.init();
    window.scrollTo(0, 0);
  }, []);
  
  
  
  return (
    <Router>
    <AuthProvider>
      <Routes>
        {/* Public Routes using DefaultLayout */}
          <Route path="*" element={"not rout foun"} />
          
        <Route path="/" element={<DefaultLayout />}>
    
          <Route index element={<Hero />} />
          <Route path="item/:id" element={ <Item />} />
          <Route path="items" element={<Items />} />
          <Route path="check-out" element={<CheckOut />} />
        </Route>

          <Route path="/order-success" element={<OrderSuccess />} />





        {/* Auth Routes using AuthLayout */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>


        {/* Auth Routes using Account */}
        <Route path="/account" element={ <ProtecRoute> <AccountLayout /> </ProtecRoute>
          }>

          <Route path="info" element={<MyInformation />} />
          <Route path="address" element={<MyAddress />} />
          <Route path="order" element={<MyOrder />} />
          <Route path="add-address" element={<AddAddressForm />} />
          <Route path="edit-address/:id" element={<EditAddressForm />} />
          <Route path="track-order" element={<TrackOrder />} />

        </Route>
      </Routes>
    </AuthProvider>
    </Router>
  )
}

export default App