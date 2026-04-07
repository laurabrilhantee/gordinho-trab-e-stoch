import { useState } from 'react'
import './App.css'

export default function App() {

  const CLASSES = [
    { nome: "Caderno", emoji: "📓 Cadernos de capa dura Marca tilibra"},
    { nome: "Caneta", emoji: "🖊️ Canetas 4 cores Marca: bic e Faber-Castel"},
    { nome: "Celular", emoji: "📱 Android e IOS"},
    { nome: "Computador", emoji: "💻 Lenovo e Positvo em ótimo estado"},
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [hp, setHp] = useState(10); //número
  const [vivo, setVivo] = useState(true); //boolean
  const [classe, setClasse] = useState(CLASSES[0]); //objeto

  const Comprar = () => {
    const novoHp = Math.max(0, hp-10);
    setHp(novoHp);
    setVivo(novoHp > 0);
  }

  const curar = () => {
    setHp(10);
    setVivo(true);
  }

  const pct = hp/10;
  const corBarra = pct > 0.5 ? "#5DCAA5" : pct > 0.25 ? "#EF9F27" : "#E24B4A";
  
  return (
    <>
      <main>
        <section>
          
          <h1>Kalunga</h1>
          <div className="thumb">
            {vivo ? classe.emoji : "✅ Compra Realizada"}
          </div>
          


          <div className="status">
            <p>Status</p>
            <span>{vivo ? "comprar" : "comprado"}</span>
          </div>

          <p id='Carrinho'>Carrinho</p>
          <div className="Carrinho" style={{background: corBarra}}>
          </div>

          <button 
          className='BTcompra'
          onClick={Comprar}
          disabled= {!vivo}
          >Comprar</button>

          <button 
          className='BTcancelar'
          onClick={curar}
          >Cancelar Compra</button>
          
          <div className="classes">
            <button onClick={() => setClasse(CLASSES[0])} >📓 Caderno</button>
            <button onClick = {() => setClasse(CLASSES[1])} >🖊️ Caneta</button>
            <button onClick = {() => setClasse(CLASSES[2])} >📱 Celular</button>
            <button onClick = {() => setClasse(CLASSES[3])} >💻 Computador</button>
          </div>

        </section>
      </main>
    </>
  )
}

