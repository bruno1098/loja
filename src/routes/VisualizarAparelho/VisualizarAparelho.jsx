import { useParams } from "react-router-dom";
import aparelhosData from "../Aparelhos/Aparelhos";

export default function VisualizarAparelho(){
    const {id} = useParams();
    const aparelho = aparelhosData.find((aparelhos) => aparelhos.id == parseInt(id));

return(
    <div className="VerAparelho">
      <h1>{aparelho.nome}</h1>
      <h2>{aparelho.descricao}</h2>
      <p>{aparelho.preco}</p>
      <img src={`${aparelho.imagem}`} alt={`${aparelho.descricao}`} />
    </div>
)
  }
