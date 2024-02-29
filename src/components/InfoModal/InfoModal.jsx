import { useItensContext } from '../../hooks/useItensContext';
import styles from './InfoModal.module.scss';

const InfoModal = ({ }) => {
	const {fecharModal} = useItensContext()
	return (
		<div className="modal">
			<div onClick={fecharModal} className="modal-background"></div>
			<div className="modal-content">
				<div className="box">
					<article className="media">
						<div className="media-left">
							<figure className="image is-64x64">
								<img src="https://github.com/SirReinato.png" alt="Image" />
							</figure>
						</div>
						<div className="media-content">
							<div className="content">
								<span>
									<strong>Renato França</strong> <small>@SirReinato</small>
								</span>
								<p>Com essa ferramenta online, você pode criar e gerenciar listas de itens para suas viagens de forma rápida e fácil. Basta adicionar os itens que você precisa levar, com a quantidade desejada, e a Mala de Viagem os organiza automaticamente em uma lista.</p>

								<h3>
									Desfrute dos benefícios da Mala de Viagem 2.0:
								</h3>

								<nav>
									<ul>
										<li>
											<strong>Oganização: </strong>
											Crie listas personalizadas para cada viagem, com todos os itens que você precisa levar.
										</li>
										<li>
											<strong>Praticidade: </strong>
											Adicione e remova itens facilmente, com a quantidade desejada.
										</li>
										<li>
											<strong>Visualização clara: </strong>
											A lista de itens é organizada de forma clara e concisa, facilitando a visualização.
										</li>
									</ul>
								</nav>

								<h3>
									Novidades na versão 2.0:
								</h3>
								<nav>
									<ul>
										<li>
											<strong>Desenvolvida com React.js: </strong>
											Código mais moderno e eficiente, para uma melhor experiência do usuário.
										</li>
										<li>
											<strong>Interface aprimorada: </strong>
											Design mais intuitivo e fácil de usar.
										</li>
									</ul>
								</nav>

								<h3>
									Considerações finais:
								</h3>
								<p>A Mala de Viagem 2.0 é um projeto open-source, disponível no GitHub. Você pode contribuir para o projeto e aprimorar suas habilidades em React.js.</p>

							</div>
								<p>Obrigado por usar a Mala de Viagem!</p>
							<footer className="buttons">
								
								<a href='https://github.com/SirReinato' target='_black' className="button is-link is-light">GitHub</a>
								<a href='https://www.linkedin.com/in/renato-fran%C3%A7a-0014b3195/' target='_black' className="button is-link is-light">Linkedin</a>
								<a onClick={fecharModal} className="button is-link is-outlined">Fechar</a>
							</footer>
						</div>
					</article>
				</div>
			</div>
			<button onClick={fecharModal} className="modal-close is-large" aria-label="close"></button>
		</div>
	);
};


export default InfoModal;