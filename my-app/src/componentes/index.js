import React, {useState} from "react";

import './index.css'

export default function PaginaInicial() {

    const [NovoTexto, setNovotexto] = useState();

    function alterarTexto() {
        setNovotexto('Olá mundo!')
    }
        
        return(
            <div className="conteudo-centralizado altura">
                <div>
                    <h1>Gerar texto no Botao Abaixo</h1>
                    <h2 className="Area-Texto">{NovoTexto}</h2>
                </div>

                <div className="area-botao">
                    <button onClick={alterarTexto}>
                        Gerar texto
                    </button>
                </div>
            </div>
        );
    }
