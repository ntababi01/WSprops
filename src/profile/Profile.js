import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

const Profile = (props) => {
  return (
    <div>
        
        <h1>{props.fullname}</h1>
        <h1>{props.bio}</h1>
        <h1>{props.profession}</h1>
             {props.children}
<boutton onclick={props.handlename}> click me</boutton>
    </div>
  )
}
Profile.defaultProps={
fullname:"here",
bio:"here is my bio",
profession:"her is my profession",
children:"here is my img",
}
Profile.propTypes={
    fullname:propTypes.string,
}
export default Profile