import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getProductsByCategory } from "../../service/api";
import Card from "../../components/Card/Card";
import S from './Product.module.css'

const Product = () => {
  const params = useParams();
  const [produtos, setProdutos] = useState([]);

  async function requisicao() {
    const response = await getProductsByCategory(params.category);
    setProdutos(response);
  }

  useEffect(() => {
    requisicao()
  }, [params.category]);

  return (
    <div className={S.container}>
      <h1 className={S.title}>{params.category}</h1>

      <section className={S.allCards}>
        {!!produtos &&
          produtos.map((produto) => {
            return (
              <Card
                key={produto.id}
                img={produto.url}
                text={produto.nome_abreviado}
                btnText="COMPRAR"
                url={`/produtos/${produto.id}`}
              />
            );
          })}
      </section>
    </div>
  );
};

export default Product;
