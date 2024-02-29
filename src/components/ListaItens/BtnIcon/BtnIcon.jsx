import styles from './BtnIcon.module.scss';

const BtnIcon = ({children,funcao}) => {
	return (
		<button 
			className={styles.btnicon}
			onClick={funcao}

		>
 			{children}
 		</button>
	);
};


export default BtnIcon;