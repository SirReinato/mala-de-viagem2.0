import styles from './Btn.module.scss';

const Btn = ({nome}) => {
	return (
		<button 
			className={styles.btn}
			>
 			{nome}
 		</button>
	);
};


export default Btn;