import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import logoImg from '../assets/images/logo.svg';
import '../styles/room.scss';

type AdminRoomParams = {
	id: string;
}

export function AdminRoom(): JSX.Element {
	const { user } = useAuth();
	const params = useParams<AdminRoomParams>();
	const roomId = params.id;
	const [newQuestion, setNewQuestion] = useState('');
	const { title, questions } = useRoom(roomId);

	async function handleCreateNewQuestion(event: FormEvent) {
		event.preventDefault();

		if (newQuestion.trim() === '' || !user) return;

		const question = {
			content: newQuestion,
			author: {
				name: user.name,
				avatar: user.avatar,
			},
			isHighlighted: false,
			isAnswered: false
		};

		await database.ref(`rooms/${roomId}/questions`).push(question);

		setNewQuestion('');
	}

	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img src={logoImg} alt="" />

					<div>
						<RoomCode roomCode={roomId} />
						<Button isOutlined>Encerrar sala</Button>
					</div>
				</div>
			</header>

			<main>
				<div className="room-title">
					<h1>{title}</h1>
					{questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
				</div>

				<ul className="question-list">
					{questions.map(question => (
						<Question content={question.content} author={question.author} key={question.id} />
					))}
				</ul>
			</main>
		</div>
	);
}
