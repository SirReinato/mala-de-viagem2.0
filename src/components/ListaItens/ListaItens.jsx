
import styles from './ListaItens.module.scss';

const ListaItens = ({quantidade, nome}) => {
	return (
		<li className={styles.listaitens}>
 			<span> <p>3</p> </span>
			<h3 className={styles.nome}>Fone de ouvido</h3>
 		</li>
	);
};

export default ListaItens;