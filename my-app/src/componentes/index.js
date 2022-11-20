import React, {useState} from "react";
import './index.css'
export default function PaginaInicial() {

    const [numeroAleatorio, setNumeroAleatorio] = useState(1);

        function Gerarnumero() {
            const novoNumero = Math.floor(Math.random() * (100-1 ) + 1);
            setNumeroAleatorio(novoNumero);
        }  
            return(
                <div className="altura">

                <div className="conteudo-centralizado">
                    <h3>Numero aleatorio</h3>
                    <h1>{ numeroAleatorio }</h1>

                    <div className='area-botao' >
                        <label>
                            Click no botao para gerar um novo numero
                        </label>

                        <button className="areabutton" onClick={Gerarnumero}>
                            
                            Gerar numero
                        </button>
                    </div>
                </div>
            </div>
            );
        }