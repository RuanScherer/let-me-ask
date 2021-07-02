import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../../components/Button';
import { database } from '../../../services/firebase';
import {
	StyledAuthPage,
	StyledAuthPageBanner,
	StyledAuthPageForm,
	StyledAuthPageMainContainer,
	StyledAuthPageMainContent
} from '../styles';
import { StyledCreateRoomButton, StyledSeparator } from './styles';
import Illustration from '../../../assets/images/illustration.svg';
import logoImg from '../../../assets/images/logo.svg';
import googleIconImage from '../../../assets/images/google-icon.svg';

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
		<StyledAuthPage>
			<StyledAuthPageBanner>
				<img src={Illustration} alt="" />
				<strong>Toda pergunta tem uma resposta.</strong>
				<p>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</StyledAuthPageBanner>

			<StyledAuthPageMainContainer>
				<StyledAuthPageMainContent>
					<img src={logoImg} alt="" />

					<StyledCreateRoomButton onClick={handleCreateRoom}>
						<img src={googleIconImage} alt="" />
						Crie sua sala com o Google
					</StyledCreateRoomButton>

					<StyledSeparator>
						ou entre em uma sala
					</StyledSeparator>

					<StyledAuthPageForm onSubmit={handleJoinRoom}>
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
					</StyledAuthPageForm>
				</StyledAuthPageMainContent>
			</StyledAuthPageMainContainer>
		</StyledAuthPage>
	);
}
