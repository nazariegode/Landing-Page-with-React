//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/navbar";
import Cards from "./component/cards";
import Jumbotron from "./component/jumbotron";
import Jumbo from "./component/jumbo";
import Footer from "./component/footer";
import Contact from "./component/contact";

//render your react application
ReactDOM.render(
    <>
        <Navbar />,
        <Jumbo />,
        <Jumbotron />,
        <Cards />,
        <Contact />,
        <Footer />,
    </>,
    document.querySelector("#app"));
