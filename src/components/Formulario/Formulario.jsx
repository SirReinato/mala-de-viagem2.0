import { Btn } from './Btn';
import styles from './Formulario.module.scss';
import LabelInput from './LabelInput/LabelInput';

const Formulario = ({ }) => {
	return (
		<form onSubmit={() => ''} className={styles.formulario}>
			<div className={styles.centralizar}>
				<LabelInput nome={'Item'} placeholder={'Digite o item'}/>
				<LabelInput nome={'Quantidade'} placeholder={'Digite o qunatidade'}/>
				<Btn nome={'Adicionar'} />
			</div>
		</form>
	);
};


export default Formulario;