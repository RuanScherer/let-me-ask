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

type RoomParams = {
	id: string;
}

export function Room(): JSX.Element {
	const { user } = useAuth();
	const params = useParams<RoomParams>();
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
					<RoomCode roomCode={roomId} />
				</div>
			</header>

			<main>
				<div className="room-title">
					<h1>{title}</h1>
					{questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
				</div>

				<form onSubmit={handleCreateNewQuestion}>
					<textarea
						id="new-question"
						name="new-question"
						value={newQuestion}
						onChange={event => setNewQuestion(event.target.value)}
						placeholder="O que você quer perguntar?"
						required
					>
					</textarea>

					<div className="form-footer">
						{user
							? (
								<div className="user-info">
									<img src={user.avatar} alt={user.name} />
									<span>{user.name}</span>
								</div>
							)
							: (
								<span>Para enviar uma pergunta, <button>faça seu login.</button></span>
							)
						}

						<Button type="submit" disabled={!user}>Enviar pergunta</Button>
					</div>
				</form>

				<ul className="question-list">
					{questions.map(question => (
						<Question content={question.content} author={question.author} key={question.id} />
					))}
				</ul>
			</main>
		</div>
	);
}
