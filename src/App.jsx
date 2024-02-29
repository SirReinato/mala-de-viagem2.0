import { useContext } from 'react'
import styles from './App.module.scss'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Formulario from './components/Formulario/Formulario'
import ListaItens from './components/ListaItens/ListaItens'
import { ItensContext } from './context/ItensContext'
import { IoMdInformationCircleOutline } from "react-icons/io";
import BtnIcon from './components/ListaItens/BtnIcon/BtnIcon'
import { useItensContext } from './hooks/useItensContext'
import InfoModal from './components/InfoModal/InfoModal'


function App() {

  const {openModal} = useItensContext()
  const { osItens } = useContext(ItensContext)

  return (
    <>
      <main className={styles.bgGeral}>
        <header className={styles.headeer}>
          <h1 className={styles.titulo}>Mala de Viagem 2.0</h1>
          <BtnIcon funcao={openModal}>
            <IoMdInformationCircleOutline />
          </BtnIcon>
          <InfoModal/>
        </header>

        <section>
          <Formulario />

          <ul className={styles.lista}>
            {osItens.map(item => {
              return (
                <ListaItens {...item} key={item.id} />
              )
            })}
          </ul>
          <Banner total={osItens.length} />
        </section>

      </main>
      <Footer />
    </>
  )
}

export default App
