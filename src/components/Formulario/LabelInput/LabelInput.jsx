import styles from './LabelInput.module.scss';

const LabelInput = ({nome, placeholder}) => {
	return (
		<label className={styles.labelinput}>
 			{nome}
				<input className={styles.inputt} type="text" placeholder={placeholder}/>
 		</label>
	);
};


export default LabelInput;