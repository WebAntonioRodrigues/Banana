import PerfilCard from '../../Components/Comun/PerfilCard';
import logo from '../../assets/Logos/logo-banana.png';
import '../../Styles/Home/Hero.css';


function Hero() {
    return (
			<section>
				<div className='herocard'>
					<PerfilCard
						foto={logo}
						nome='RUI COSTA'
                    cargo='PRESIDENTE DO SL BENFICA'
						dados={[{ label: 'Início de mandato', valor: '9 de outubro de 2021', eleicao: 'Eleições', eleicao1: '9 Outubro 2021 ( 84,48% )', eleicao2: '8 Novembro 2025 ( 65,89% )' }]}
					/>
				</div>
			</section>
		);
}

export default Hero;