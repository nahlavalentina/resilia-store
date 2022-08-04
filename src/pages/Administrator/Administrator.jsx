import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getProducts } from '../../service/api'
import { useParams } from 'react-router-dom'
import S from './Administrator.module.css'
import List from '../../components/List/List'
import { Link } from 'react-router-dom'

const Administrator = () => {
  const params = useParams();
  const [lists, setList] = useState([]);

  async function requisicao() {
    const response = await getProducts();
    setList(response);
  }

  useEffect(() => {
    requisicao()
  }, [params.category]);

  return (
    <div>
      <Link to="/admin/new"><p>Adicionar novo</p></Link>
      <section>
        {!!lists &&
          lists.map((produto) => {
            return (
              <List
                key={produto.id}
                title={produto.nome_abreviado}
                price={produto.preco}
                category={produto.categoria}
              />
            );
          })}
      </section>
    </div>
  );
  
}

export default Administrator
