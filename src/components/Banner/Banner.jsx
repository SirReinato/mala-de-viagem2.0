import styles from './Banner.module.scss';

const Banner = ({ total }) => {
	return (
		<div className={styles.banner}>
			<div className={styles.centralizar}>
				<h3 className={styles.titulo}>Total de Itens</h3>
				<span>{total}</span>
			</div>
		</div>
	);
};


export default Banner;