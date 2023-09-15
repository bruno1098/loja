import "./Home.css";
import imagemIphone from "../Home/iphone.png";
import imagemSamsung from "../Home/samsung.png";

export default function Home() {
    return (
        <main>
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
                        <p>Desconto especial desse Smartphone</p>
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
                        <p>Desconto especial desse Smartphone</p>
                        <button className="ad-button">Detalhes</button>
                    </div>
                </div>
            </div>
        </main>
    )
}