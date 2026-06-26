import championsImg from '../../assets/trophy/Champions.png';
import primeiraLigaImg from '../../assets/trophy/primeira-liga.png';
import supertacaImg from '../../assets/trophy/supertaca.png';
import tacaLigaImg from '../../assets/trophy/taca-liga.png';
import tacaPortugalImg from '../../assets/trophy/taca-portugal.png';
import '../../Styles/Comun/SubNavbar.css';

function SubNavbar({ trofeus = {}}) {
	const listaTrofeus = [
		{ nome: 'Primeira Liga', imagem: primeiraLigaImg, quantidade: trofeus.primeiraLiga },
		{ nome: 'Supertaça', imagem: supertacaImg, quantidade: trofeus.supertaca },
		{ nome: 'Taça da Liga', imagem: tacaLigaImg, quantidade: trofeus.tacaLiga },
		{ nome: 'Taça de Portugal', imagem: tacaPortugalImg, quantidade: trofeus.tacaPortugal },
		{ nome: 'Champions League', imagem: championsImg, quantidade: trofeus.champions },
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
