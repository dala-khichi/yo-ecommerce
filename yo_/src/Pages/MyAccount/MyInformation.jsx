import React from 'react'
import MyAccountButton from '../../Part/MyAccount/MyAccountButton'
import ProfileInfo from '../../Part/MyAccount/ProfileInfo'



const MyInformation = () => {
  return (
    <div className="ani ">
      <ProfileInfo />
      <MyAccountButton text="Edit my information" />
      <MyAccountButton text="Edit my password" />
      
      
    </div>
  )
}

export default MyInformation