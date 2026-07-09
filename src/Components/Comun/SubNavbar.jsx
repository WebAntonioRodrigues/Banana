import { useState, useEffect } from 'react';
import championsImg from '../../assets/Trophy/Champions.png';
import primeiraLigaImg from '../../assets/Trophy/primeira-liga.png';
import supertacaImg from '../../assets/Trophy/supertaca.png';
import tacaLigaImg from '../../assets/Trophy/taca-liga.png';
import tacaPortugalImg from '../../assets/Trophy/taca-portugal.png';
import europaImg from '../../assets/Trophy/Europaleague.png';
import supereuropaImg from '../../assets/Trophy/supercup.png';
import mundialImg from '../../assets/Trophy/mundialclubes.png';
import '../../Styles/Comun/SubNavbar.css';

function SubNavbar() {
	const [trofeus, setTrofeus] = useState({
		primeiraLiga: 0,
		tacaPortugal: 0,
		supertaca: 0,
		tacaLiga: 0,
		champions: 0,
		Europa: 0,
		supertacaEuropa: 0,
		mundialclubes: 0,
	});

	useEffect(() => {
		fetch('http://localhost:3000/api/trofeus')
			.then(res => res.json())
			.then(data => {
				const totais = {
					primeiraLiga: 0,
					tacaPortugal: 0,
					supertaca: 0,
					tacaLiga: 0,
					champions: 0,
					europa: 0,
					supertacaEuropa: 0,
					mundialclubes:0,
				};
				data.forEach(item => {
					if (item.trofeu === 'Primeira Liga') totais.primeiraLiga = item.quantidade;
					if (item.trofeu === 'Taça de Portugal') totais.tacaPortugal = item.quantidade;
					if (item.trofeu === 'Supertaça Cândido de Oliveira') totais.supertaca = item.quantidade;
					if (item.trofeu === 'Taça da Liga') totais.tacaLiga = item.quantidade;
					if (item.trofeu === 'Champions League') totais.champions = item.quantidade;
					if (item.trofeu === 'Europa League') totais.europa = item.quantidade;
					if (item.trofeu === 'Supertaça Europa') totais.supertacaEuropa = item.quantidade;
					if (item.trofeu === 'Mundial de clubes') totais.mundialclubes = item.quantidade;
				});
				setTrofeus(totais);
			})
			.catch(err => console.error('Erro ao obter troféus:', err));
	}, []);

	const listaTrofeus = [
		{ nome: 'Primeira Liga', imagem: primeiraLigaImg, quantidade: trofeus.primeiraLiga },
		{ nome: 'Taça de Portugal', imagem: tacaPortugalImg, quantidade: trofeus.tacaPortugal },
		{ nome: 'Supertaça', imagem: supertacaImg, quantidade: trofeus.supertaca },
		{ nome: 'Taça da Liga', imagem: tacaLigaImg, quantidade: trofeus.tacaLiga },
		{ nome: 'Champions League', imagem: championsImg, quantidade: trofeus.champions },
		{ nome: 'Europe League', imagem: europaImg, quantidade: trofeus.europa },
		{ nome: 'Supertaça Europeia', imagem: supereuropaImg, quantidade: trofeus.supertacaEuropa },
		{ nome: 'Mundial de clubes', imagem: mundialImg, quantidade: trofeus.mundialclubes },
	];

	return (
		<div className='subnavbar'>
			<div className='subnavbar-label'>
				<span className='subnavbar-title'>PALMARÉS</span>
				<span className='subnavbar-subtitle'>TOTAL DESDE 2021</span>
			</div>
			{listaTrofeus.map(trofeu => (
				<div key={trofeu.nome} className={trofeu.quantidade === 0 ? 'trophy-item zero' : 'trophy-item'}>
					<img src={trofeu.imagem} alt={trofeu.nome} className='trophy-img' />
					<div className='trophy-info'>
						<span className='trophy-name'>{trofeu.nome}</span>
						<span className='trophy-count'>{trofeu.quantidade}</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default SubNavbar;
