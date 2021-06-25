import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';
import Illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { database } from '../services/firebase';

export function Home(): JSX.Element {
	const [roomCode, setRoomCode] = useState('');
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();

	async function handleCreateRoom() {
		if (!user) {
			await signInWithGoogle();
		}
		history.push('/salas/nova');
	}

	async function handleJoinRoom(event: FormEvent) {
		event.preventDefault();

		if (roomCode.trim() === '') return;

		const roomRef = await database.ref(`rooms/${roomCode}`).get();

		if (!roomRef.exists()) {
			alert('Sala não existe!');
			return;
		}

		if (roomRef.val().closedAt) {
			alert('A sala já está fechada!');
			return;
		}

		history.push(`salas/${roomCode}`);
	}

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

					<button className="create-room" onClick={handleCreateRoom}>
						<img src={googleIconImage} alt="" />
						Crie sua sala com o Google
					</button>

					<div className="separator">
						ou entre em uma sala
					</div>

					<form onSubmit={handleJoinRoom}>
						<input
							type="text"
							placeholder="Digite o código da sala"
							id="room-code"
							name="room-code"
							value={roomCode}
							onChange={event => setRoomCode(event.target.value)}
							data-testid="room-code"
							required
						/>

						<Button type="submit">Entrar na sala</Button>
					</form>
				</div>
			</main>
		</div>
	);
}
