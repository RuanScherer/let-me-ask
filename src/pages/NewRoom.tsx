import { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import Illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';

export function NewRoom(): JSX.Element {
	const [roomName, setRoomName] = useState('');
	const { user } = useAuth();
	const history = useHistory();

	useEffect(() => {
		if (!user) {
			history.goBack();
		}
	}, [user]);

	async function handleCreateRoom(event: FormEvent) {
		event.preventDefault();

		if (roomName.trim() === '') return;

		const roomsRef = database.ref('rooms');
		const firebaseRoom = await roomsRef.push({
			title: roomName,
			authorId: user?.id
		});

		history.push(`/salas/${firebaseRoom.key}`);
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

					<h2>Criar uma nova sala</h2>

					<form onSubmit={handleCreateRoom}>
						<input
							type="text"
							placeholder="Nome da sala"
							id="room-name"
							name="room-name"
							value={roomName}
							onChange={event => setRoomName(event.target.value)}
							data-testid="room-name"
							required
						/>

						<Button type="submit">Criar sala</Button>
					</form>

					<p>
						Quer entrar em uma sala existente?{' '}
						<Link to="/">Clique aqui</Link>
					</p>
				</div>
			</main>
		</div>
	);
}
