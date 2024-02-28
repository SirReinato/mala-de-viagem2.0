import { useContext } from 'react'
import styles from './App.module.scss'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Formulario from './components/Formulario/Formulario'
import ListaItens from './components/ListaItens/ListaItens'
import { ItensContext } from './context/ItensContext'

function App() {

  const {osItens} = useContext(ItensContext)
  
  return (
    <>
      <main className={styles.bgGeral}>
        
        <header>
          <h1 className={styles.titulo}>Mala de Viagem 2.0</h1>
        </header>

        <section>
          <Formulario />
         
          <ul className={styles.lista}>
            {osItens.map(item =>{
              return(
                <ListaItens {...item} key={item.id} />
              )
            })}
          </ul>
          <Banner total={osItens.length}/>
        </section>

      </main>
      <Footer/>
    </>
  )
}

export default App
