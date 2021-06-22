import Illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom(): JSX.Element {
	return (
		<div id="page-auth">
			<aside>
				<img src={Illustration} alt="" />
				<strong>Toda pergunta tem uma resposta.</strong>
				<p>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</aside>

			<main>
				<div className="main-content">
					<img src={logoImg} alt="" />

					<h2>Criar uma nova sala</h2>

					<form>
						<input
							type="text"
							placeholder="Nome da sala"
						/>

						<Button type="submit">Criar sala</Button>
					</form>

					<p>
						Quer entrar em uma sala existente?{' '}
						<a href="#">Clique aqui</a>
					</p>
				</div>
			</main>
		</div>
	);
}
