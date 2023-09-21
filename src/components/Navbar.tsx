import {Navbar as NavbarBs,Container,Nav,Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import shoppingCartImage from "../components/shopping-cart.png";
import { useShoppingCart } from "../context/ShoppingCartContext";


export function Navbar(){
    const {openCart,cartQuantity}=useShoppingCart()
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-4">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cartQuantity>0 && (
                <Button className="bg-white border-0" style={{height:"4rem",width:"3rem",position:"relative",marginRight:'3vw'}} onClick={openCart}>
                <img src={shoppingCartImage} style={{objectFit:"cover",height:"3rem"}}/>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{width:"1.5rem",height:'1.5rem',position:"absolute",bottom:0,right:0,transform:"translate(75%,-15%)"}}>
                {cartQuantity}</div>
             </Button>
            )} 

        </Container>
    </NavbarBs>
}