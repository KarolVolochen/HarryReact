import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./styles.css";

function Fotos(){
    return (
        <>
        <Header />
        <div className="fotos">
        <div class="fotos-extra-container">
        <div class="fotos-content">
            <div className="trio banner-1">Trio de Ouro</div>
            <div className="trio banner-2">Harry Potter</div>
            <div className="trio banner-3">Dumbledore</div>
            <div className="trio banner-4">Hagrid</div>
           
        </div>
    </div>
    </div>
    
    <Footer />
            
        
        </>
    )
}

export default Fotos;