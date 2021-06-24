import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import logoImg from '../assets/images/logo.svg';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { useEffect } from 'react';
import '../styles/room.scss';

type RoomParams = {
	id: string;
}

type FirebaseQuestions = Record<string, {
	author: {
		name: string;
		avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
}>

type Question = {
	id: string;
	author: {
		name: string;
		avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
}

export function Room(): JSX.Element {
	const { user } = useAuth();
	const params = useParams<RoomParams>();
	const roomId = params.id;
	const [newQuestion, setNewQuestion] = useState('');
	const [questions, setQuestions] = useState<Question[]>([]);
	const [title, setTitle] = useState('');

	useEffect(() => {
		const roomRef = database.ref(`rooms/${roomId}`);

		roomRef.on('value', room => {
			const firebaseRoom = room.val();
			const firebaseQuestions = firebaseRoom.questions as FirebaseQuestions;
			const parsedQuestions = Object.entries(firebaseQuestions ?? {}).map(([key, value]) => {
				return {
					id: key,
					content: value.content,
					author: value.author,
					isHighlighted: value.isHighlighted,
					isAnswered: value.isAnswered
				};
			});

			setTitle(firebaseRoom.title);
			setQuestions(parsedQuestions);
		});
	}, [roomId]);

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

				{JSON.stringify(questions)}
			</main>
		</div>
	);
}
