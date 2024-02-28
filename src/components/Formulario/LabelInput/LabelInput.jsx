import styles from './LabelInput.module.scss';

const LabelInput = ({nome, placeholder, value, type,quandoAlterado}) => {
	
	return (
		<label className={styles.labelinput}>
 			{nome}
				<input 
					className={styles.inputt} 
					placeholder={placeholder}
					required
					type={type}
					value={value}
					onChange={event => quandoAlterado(event.target.value)}
				/>
 		</label>
	);
};


export default LabelInput;