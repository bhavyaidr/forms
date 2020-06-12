import React from "react"
import {Navbar,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"


class Navigation extends React.Component{
render(){
return(
<Navbar bg="dark" variant="dark">
<Link to={""} className="navbar-brand">


</Link>



<Nav className="mr-auto">

      <Link to={"add"} className="nav-link">Register</Link>
      <Link to={"list"} className="nav-link">Registered Users</Link>
       <Link to={"login"} className="nav-link">Login</Link>


    </Nav>
</Navbar>
)

}

}

export default Navigation