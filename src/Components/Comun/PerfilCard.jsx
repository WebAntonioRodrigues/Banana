import '../../Styles/Comun/PerfilCard.css';

function PerfilCard({ foto, nome, cargo, dados }) {
	return (
		<div className='perfil'>
			<div className='perfil-foto'>
				<img src={foto} alt={nome} />
			</div>
			<div className='perfil-info'>
				<h1 className='perfil-nome'>{nome}</h1>
				<p className='perfil-cargo'>{cargo}</p>
				<div className='perfil-dados'>
					{dados.map(dado => (
						<div key={dado.label} className='perfil-dado'>
							<span className='perfil-dado-label'>{dado.label}</span>
                            <span className='perfil-dado-valor'>{dado.valor}</span>
                            <br />
							<span className='perfil-dado-label'>{dado.eleicao}</span>
							<span className='perfil-dado-valor'>{dado.eleicao1}</span>
							<span className='perfil-dado-valor'>{dado.eleicao2}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default PerfilCard;
