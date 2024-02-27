import styles from './LabelInput.module.scss';

const LabelInput = ({nome, placeholder, value,quandoAlterado, foco}) => {
	
	return (
		<label className={styles.labelinput}>
 			{nome}
				<input 
					className={styles.inputt} 
					placeholder={placeholder}
					required
					value={value}
					autoFocus={foco}
					onChange={event => quandoAlterado(event.target.value)}
				/>
 		</label>
	);
};


export default LabelInput;