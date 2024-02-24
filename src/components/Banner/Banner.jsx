import styles from './Banner.module.scss';

const Banner = ({ }) => {
	return (
		<div className={styles.banner}>
			<div className={styles.centralizar}>
				<h3 className={styles.titulo}>Total de Itens</h3>
				<span>3</span>
			</div>
		</div>
	);
};


export default Banner;