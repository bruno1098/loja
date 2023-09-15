
import "./Aparelho.css";
import aparelhosData from "./Aparelhos.js";
import "../Home/Home.css";
import imagemIphone from "../Home/iphone.png";
import imagemSamsung from "../Home/samsung.png";

export default function Aparelhos() {
    return (
        <main>
            <div className="aparelhos-container">
                <h2>Todos nossos aparelhos</h2>
                <ul className="aparelhos-list">
                    {aparelhosData.map((aparelho) => (
                        <li key={aparelho.id} className="aparelho-item">
                            <img
                                src={`${aparelho.imagem}`}
                                alt={aparelho.nome}
                                className="aparelho-image"
                            />
                            <div className="aparelho-details">
                                <h3>{aparelho.nome}</h3>
                                <p>Preço: R$ {aparelho.preco.toFixed(2)}</p>
                                <p>Descrição: {aparelho.descricao}</p>
                                <button className="aparelho-button">Detalhes</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <h2>Aparelhos na promoção</h2>
                <div className="home-container">
                    <div className="ad">
                        <img
                            src={imagemIphone}
                            alt="Promoção Aparelho 1"
                            className="ad-image"
                        />
                        <div className="ad-details">
                            <h3>Promoção iPhone</h3>
                            <p>Preço: R$ 600.00</p>
                            <button className="ad-button">Detalhes</button>
                        </div>
                    </div>
                    <div className="ad">
                        <img
                            src={imagemSamsung}
                            alt="Promoção Aparelho 2"
                            className="ad-image"
                        />
                        <div className="ad-details">
                            <h3>Promoção Samsung</h3>
                            <p>Preço: R$ 400.00</p>
                            <button className="ad-button">Detalhes</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}