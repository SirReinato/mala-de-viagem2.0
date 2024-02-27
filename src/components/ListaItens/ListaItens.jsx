import { TiDeleteOutline } from "react-icons/ti";
import styles from './ListaItens.module.scss';

const ListaItens = ({quantidade, item}) => {
	return (
		<li className={styles.listaitens}>
 			<span> <p>{quantidade}</p> </span>
			<h3 className={styles.nome}>{item}</h3>
			<button 
				className={styles.btnDelete}>
					<TiDeleteOutline color="#fff" />
			</button>
 		</li>
	);
};

export default ListaItens;