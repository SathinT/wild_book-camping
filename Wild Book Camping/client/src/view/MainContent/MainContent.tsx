import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {Store} from "../Pages/Store";
import {About} from "../Pages/About";
import {Contact} from "../Pages/Contact";
import {CampingGear} from "../Pages/Store/CampingGear";
import {HikingGear} from "../Pages/Store/HikingGear";
import {Cycles} from "../Pages/Store/Cycles";

import {ModifyCart} from "../ModifyCart/ModifyCart";
import {ShoppingCart} from "../Pages/Cart";
import {LogIn} from "../Account/LogIn";
import {Register} from "../Account/Register";
import Checkout from "../Pages/Checkout";


export class MainContent extends Component {
    render() {
        return (
            <>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/store" Component={Store}></Route>
                <Route path="/about" Component={About}></Route>
                <Route path="/contact" Component={Contact}></Route>
                <Route path="/campingGear" Component={CampingGear}></Route>
                <Route path="/hikingGear" Component={HikingGear}></Route>
                <Route path="/cycles" Component={Cycles}></Route>

                <Route path="/cart" element={<ShoppingCart itemList={ModifyCart.itemList}/>}></Route>
                <Route path="/checkout" Component={Checkout}></Route>
            </Routes>
            </>
        );
    }
}
