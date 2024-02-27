import { useState } from 'react';
import { Btn } from './Btn';
import styles from './Formulario.module.scss';
import LabelInput from './LabelInput/LabelInput';

const Formulario = ({ porNaLista }) => {

	const [item, setitem] = useState("");
	const [quantidade, setQuantidade] = useState("");
	const [id, setId] = useState(0);

	const aoSalvar = (event) =>{
		event.preventDefault();
		setId(id + 1)
		porNaLista({item, quantidade, id})

		setitem('')
		setQuantidade('')
	}

	return (
		<form onSubmit={aoSalvar} className={styles.formulario}>
			<div className={styles.centralizar}>
				<LabelInput 
					nome={'Item'} 
					placeholder={'Digite o item'}
					foco
					value={item}
					quandoAlterado={value => setitem(value)}
				/>
				<LabelInput 
					nome={'Quantidade'} 
					placeholder={'Digite o quantidade'}
					value={quantidade}
					quandoAlterado={value => setQuantidade(value)}
				/>
				<Btn nome={'Adicionar'} />
			</div>
		</form>
	);
};


export default Formulario;