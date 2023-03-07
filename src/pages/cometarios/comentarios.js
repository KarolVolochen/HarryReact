import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './styles.css'

function Comentarios(){
    return(
        <>
        <Header />
        <div className="todos-comentarios">
            <div className="comentarios-content">
                <div className="comentario">
                 Ana Estela
                     <p>
                    ★★★★★
                    </p>
                <div className="teste">
                    <span className="opiniao">
                    Harry Potter realmente não perde a mágia.
                    Me levou para minha infancia.
                    </span>
                </div>
            </div>

            <div className="comentario2">
                 Marco Aurelio
                    <p>
                    ★★★☆☆
                    </p>
                <div className="teste2">
                    <span className="opiniao">Talvez eu goste mais dos próximos,
                    esse na minha opinião é um pouco infantil
                    </span>
                </div>
            </div>

            <div className="comentario3">
                Marcela
                    <p>
                    ★★★★☆
                    </p>
                <div className="teste3">
                    <span className="opiniao">Simplesmente amo esse filme,
                    super ansiosa para os próximos. 
                    </span>
                </div>
            </div>
            </div>
            </div>

            <Footer />
            </>
    )
}

export default Comentarios