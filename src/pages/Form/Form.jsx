import React, { useState } from "react";
import BtnGen from "../../components/BtnGen/BtnGen";
import { postProduct } from "../../service/api";

const Form = () => {
  const [formData, setFormData] = useState({
    nome_completo: "",
    url: "",
    nome_abreviado: "",
    categoria: "",
    marca: "",
    quantidade: "",
    cor: "",
    preco: "",
    porcentagem_desconto: "",
    descricao: "",
  });

  function handleChange(target, key) {
    const value = target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSave(e) {
    e.preventDefault();
    postProduct(formData);
  }

  return (
    <div>
      <img src={formData.url} alt="" />
      <form action="">
        <fieldset>
          <label htmlFor="">Nome Completo</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.nome_completo}
            onChange={({ target }) => handleChange(target, "nome_completo")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">URL</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.url}
            onChange={({ target }) => handleChange(target, "url")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Nome Abreviado</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.nome_abreviado}
            onChange={({ target }) => handleChange(target, "nome_abreviado")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Categoria</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.categoria}
            onChange={({ target }) => handleChange(target, "categoria")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Marca</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.marca}
            onChange={({ target }) => handleChange(target, "marca")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Quantidade</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.quantidade}
            onChange={({ target }) => handleChange(target, "quantidade")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Cor</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.cor}
            onChange={({ target }) => handleChange(target, "cor")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Preço</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.preco}
            onChange={({ target }) => handleChange(target, "preco")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Porcentagem de Desconto</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.porcentagem_desconto}
            onChange={({ target }) =>
              handleChange(target, "porcentagem_desconto")
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Descrição</label>
          <input
            type="text"
            placeholder="nome"
            value={formData.descricao}
            onChange={({ target }) => handleChange(target, "descricao")}
          />
        </fieldset>
        <BtnGen text="Cancelar" />
        <BtnGen text="Excluir" />
        <BtnGen text="Salvar" onclick={handleSave} />
      </form>
    </div>
  );
};

export default Form;
