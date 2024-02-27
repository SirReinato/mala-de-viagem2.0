import { useState } from 'react'
import styles from './App.module.scss'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Formulario from './components/Formulario/Formulario'
import ListaItens from './components/ListaItens/ListaItens'

function App() {

  const [novoItem, setNovoIntem] = useState([]);
  
  console.log(novoItem);
  return (
    <>
      <main className={styles.bgGeral}>
        <header>
          <h1 className={styles.titulo}>Mala de Viagem 2.0</h1>
        </header>
        <section>
          <Formulario porNaLista={addNovo => setNovoIntem([...novoItem, addNovo])}/>
          <ul className={styles.lista}>
            {novoItem.map(item =>{
              return(
                <ListaItens {...item} key={item.id} />
              )
            })}
          </ul>
          <Banner total={novoItem.length}/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
