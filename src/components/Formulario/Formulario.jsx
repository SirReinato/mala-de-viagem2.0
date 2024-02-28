import { Btn } from './Btn';
import styles from './Formulario.module.scss';
import LabelInput from './LabelInput/LabelInput';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useItensContext } from '../../hooks/useItensContext';

const Formulario = () => {
	const { aoSalvar, item, quantidade, setQuantidade, setitem} = useItensContext()

	return (
		<form onSubmit={aoSalvar} className={styles.formulario}>
			<div className={styles.centralizar}>
				<LabelInput
					nome={'Item'}
					placeholder={'Digite o item'}
					value={item}
					quandoAlterado={value => setitem(primeiraLetraMaiuscula(value))}
				/>
				<LabelInput
					nome={'Quantidade'}
					placeholder={'Digite o quantidade'}
					value={quantidade}
					quandoAlterado={value => setQuantidade(value)}
				/>
				<Btn 
					nome={'Adicionar'} />

				<ToastContainer autoClose={1000} />
			</div>
		</form>
	);
};


export default Formulario;


function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }