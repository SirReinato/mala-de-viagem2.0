import { TiDeleteOutline } from "react-icons/ti";
import styles from './ListaItens.module.scss';
import { useItensContext } from "../../hooks/useItensContext";
import BtnIcon from "./BtnIcon/BtnIcon";

const ListaItens = ({quantidade, item, id}) => {
	const {aoDeletar} = useItensContext()

	return (
		<li className={styles.listaitens}>
 			<span> <p>{quantidade}</p> </span>
			<h3 className={styles.nome}>{item}</h3>
			<BtnIcon 
				funcao={item => item == aoDeletar(id)}
				>
					<TiDeleteOutline color="#fff" />
			</BtnIcon>
 		</li>
	);
};

export default ListaItens;