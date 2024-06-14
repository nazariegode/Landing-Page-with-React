import React from "react";
import Navbar from "./navbar";
import Cards from "./cards";
import Jumbotron from "./jumbotron";
import Jumbo from "./jumbo";
import Footer from "./footer";
import Contact from "./contact";
import fondo from "../../img/fondopets2.png"


const Home = () => {
    return (
        <section style={{ backgroundImage: `url(${fondo})`, backgroundPosition: "center" }}>
            <Navbar />,
            <Jumbo />,
            <Jumbotron />,
            <Cards />,
            <Contact />,
            <Footer />,
        </section>
    )
}

export default Home