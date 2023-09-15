import React from "react";
import { useParams } from "react-router-dom";
import aparelhosData from "../Aparelhos/Aparelhos";

export default function VisualizarAparelho(){
    const { id } = useParams();
    const aparelho = aparelhosData.find((ap) => ap.id === parseInt(id));
  
    if (!aparelho) {
      return <div>Aparelho não encontrado.</div>;
    }
  
    return (
      <div>
        <h2>{aparelho.nome}</h2>
        <img src={aparelho.imagem} alt={aparelho.nome} />
        <p>Descrição: {aparelho.descricao}</p>
        <p>Preço: R$ {aparelho.preco}</p>
      </div>
    );
  }
