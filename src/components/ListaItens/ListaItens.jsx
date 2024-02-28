import { TiDeleteOutline } from "react-icons/ti";
import styles from './ListaItens.module.scss';
import { useItensContext } from "../../hooks/useItensContext";

const ListaItens = ({quantidade, item, id}) => {
	const {aoDeletar} = useItensContext()

	return (
		<li className={styles.listaitens}>
 			<span> <p>{quantidade}</p> </span>
			<h3 className={styles.nome}>{item}</h3>
			<button 
				className={styles.btnDelete}
				onClick={item => item == aoDeletar(id)}
				>
					<TiDeleteOutline color="#fff" />
			</button>
 		</li>
	);
};

export default ListaItens;