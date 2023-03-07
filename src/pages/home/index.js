import React, { lazy, Suspense, useState } from "react"
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/trailer.mp4'
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";


function Home(){


    return (
        <>
            <Header />
                <div id='banner'></div>
                    <div id='trailer-container'>
                         <div className='content'>
                            <video controls className="trailer">
                                 <source src={Video} />
                                Seu navegador não possui suporte para vídeos.
                            </video>
                            <div id="sinopse">
                                <p className="description">
                                    Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys.
                                    Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.
                                </p>
                                <button className="button">Comprar Ingresso</button>
                        </div>
                    </div>
                </div>
            <Cards />
            <Footer />
        
        
        </>
       
    )
}

export default Home;