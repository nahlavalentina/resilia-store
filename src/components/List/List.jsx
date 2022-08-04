import React from "react";
import icone from "../../assets/editIcon.svg";
import S from "./List.module.css";
import { Link } from "react-router-dom";

const List = ({ title, price, category}) => {


  return (
    <section className={S.content}>
      <div className={S.caixa}>
        <h3>Nome</h3>
        <p className={S.valores}>{title}</p>
      </div>
      <div className={S.caixa}>
        <h3>Preço</h3>
        <p className={S.valores}>{price}</p>
      </div>
      <div className={S.caixa}>
        <h3>Categoria</h3>
        <p className={S.valores}>{category}</p>
      </div>
      <div className={S.caixa}>
        <Link className={S.btnIcon} to="/admin/new">
          <img className={S.icon} src={icone} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default List;
