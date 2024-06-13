import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";
import {Footer} from "../Footer/Footer";
import {MainContent} from "../MainContent/MainContent";


function App() {
    return (
        <>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </>
    );
}

export default App;
