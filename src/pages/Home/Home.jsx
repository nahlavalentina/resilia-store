import React from "react";
import S from './Home.module.css'
import Lamp from '../../assets/lamp.png'
import Notebook from '../../assets/notebook.png'
import Monitor from '../../assets/monitor.png'
import Acessorio from '../../assets/acessorio.png'
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <main className={S.container}>
        <div className={S.mainBox}>
        <h2 className={S.mainText}>
        TECNOLOGIA E <br />
        INFORMAÇÃO
      </h2>
      <h3 className={S.slogan}>Tudo na palma da sua mão</h3>
        </div>
      <section className={S.allCards}>
      <Card className={S.card} img={Notebook} text='Notebook' btnText='COMPRAR' url='/produtos/notebooks'/>
      <Card className={S.card} img={Monitor} text='Monitor' btnText='COMPRAR' url='/produtos/monitores'/>
      <Card className={S.card} img={Acessorio} text='Acessório' btnText='COMPRAR' url='/produtos/acessorios'/>
      </section>
      <img src={Lamp} alt="lampada" className={S.lamp}/>
    </main>
  );
};

export default Home;
