import styles from './App.module.scss'
import Formulario from './components/Formulario/Formulario'

function App() {

  return (
    <main className={styles.bgGeral}>
      <header>
        <h1 className={styles.titulo}>Mala de Viagem 2.0</h1>
      </header>
      <section>
        <Formulario/>
      </section>

    </main>
  )
}

export default App
