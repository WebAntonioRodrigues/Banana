import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PerfilCard from '../../Components/Comun/PerfilCard';


function ManagerProfile() {
	const { id } = useParams();
	const [treinador, setTreinador] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3000/api/treinadores/${id}`)
			.then(res => res.json())
			.then(data => setTreinador(data))
			.catch(err => console.error('Erro:', err));
	}, [id]);

	if (!treinador) return <p>A carregar...</p>;

	return (
		<div>
			<PerfilCard
				foto={`/Managers/${treinador.foto}`}
				nome={treinador.nome.toUpperCase()}
				cargo='TREINADOR'
				dados={[
					{ label: 'Nome completo', valor: treinador.nome_completo },
					{ label: 'Nacionalidade', valor: treinador.nacionalidade },
					{ label: 'Naturalidade', valor: treinador.naturalidade },
					{ label: 'Licença', valor: treinador.licenca },
					{ label: 'Situação', valor: treinador.situacao },
					{ label: 'Motivo de saída', valor: treinador.motivo_saida },
				]}
			/>
		</div>
	);
}

export default ManagerProfile;
