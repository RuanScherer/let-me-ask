import { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../../components/Button/';
import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';
import {
	StyledAuthPage,
	StyledAuthPageBanner,
	StyledAuthPageForm,
	StyledAuthPageMainContainer,
	StyledAuthPageMainContent,
	StyledAuthPageMainTitle
} from '../styles';
import { StyledText } from './styles';
import Illustration from '../../../assets/images/illustration.svg';
import logoImg from '../../../assets/images/logo.svg';

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

		history.push(`/admin/salas/${firebaseRoom.key}`);
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

					<StyledAuthPageMainTitle>Criar uma nova sala</StyledAuthPageMainTitle>

					<StyledAuthPageForm onSubmit={handleCreateRoom}>
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
					</StyledAuthPageForm>

					<StyledText>
						Quer entrar em uma sala existente?{' '}
						<Link to="/">Clique aqui</Link>
					</StyledText>
				</StyledAuthPageMainContent>
			</StyledAuthPageMainContainer>
		</StyledAuthPage>
	);
}
