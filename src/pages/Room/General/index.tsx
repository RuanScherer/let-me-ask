import { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button } from '../../../components/Button/';
import { Question } from '../../../components/Question/';
import { RoomCode } from '../../../components/RoomCode/';
import { Header } from '../../../components/Header';
import { TotalQuestionsIndicator } from '../../../components/TotalQuestionsIndicator';
import { useAuth } from '../../../hooks/useAuth';
import { useRoom } from '../../../hooks/useRoom';
import { database } from '../../../services/firebase';
import { StyledQuestionButton } from '../../../components/Question/styles';
import {
	StyledQuestionsList,
	StyledRoomInfoContainer,
	StyledRoomName,
	StyledRoomPageContainer
} from '../styles';
import {
	StyledRoomFormFooter,
	StyledRoomLoginAlert,
	StyledRoomQuestionInput,
	StyledRoomUserInfo
} from './styles';

type RoomParams = {
	id: string;
}

export function Room(): JSX.Element {
	const { user } = useAuth();
	const history = useHistory();
	const params = useParams<RoomParams>();
	const roomId = params.id;
	const [newQuestion, setNewQuestion] = useState('');
	const { room, title, questions } = useRoom(roomId);

	useEffect(() => {
		if (room && room.closedAt) {
			history.goBack();
		}
	}, [room]);

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

	async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
		if (!questionId || !user) return;

		if (likeId) {
			await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
		} else {
			await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
				authorId: user.id
			});
		}
	}

	if (!room) {
		return (
			<div></div>
		);
	}

	return (
		<>
			<Header>
				<RoomCode roomCode={roomId} />
			</Header>

			<StyledRoomPageContainer>
				<StyledRoomInfoContainer>
					<StyledRoomName>{title}</StyledRoomName>
					<TotalQuestionsIndicator questionsCount={questions.length} />
				</StyledRoomInfoContainer>

				<form onSubmit={handleCreateNewQuestion}>
					<StyledRoomQuestionInput
						id="new-question"
						name="new-question"
						value={newQuestion}
						onChange={event => setNewQuestion(event.target.value)}
						placeholder="O que voc?? quer perguntar?"
						required
					>
					</StyledRoomQuestionInput>

					<StyledRoomFormFooter>
						{user
							? (
								<StyledRoomUserInfo>
									<img src={user.avatar} alt={user.name} />
									<span>{user.name}</span>
								</StyledRoomUserInfo>
							)
							: (
								<StyledRoomLoginAlert>
									Para enviar uma pergunta, <Link to="/">fa??a seu login.</Link>
								</StyledRoomLoginAlert>
							)
						}

						<Button type="submit" disabled={!user || !newQuestion}>Enviar pergunta</Button>
					</StyledRoomFormFooter>
				</form>

				<StyledQuestionsList>
					{questions.map(question => (
						<Question
							content={question.content}
							author={question.author}
							key={question.id}
							isAnswered={question.isAnswered}
							isHighlighted={question.isHighlighted}
						>
							{!question.isAnswered && (
								<StyledQuestionButton
									likeButton
									liked={!!question.likeId}
									aria-label="Marcar como gostei"
									onClick={() => handleLikeQuestion(question.id, question.likeId)}
								>
									{question.likeCount > 0 && <span>{question.likeCount}</span>}
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</StyledQuestionButton>
							)}
						</Question>
					))}
				</StyledQuestionsList>
			</StyledRoomPageContainer>
		</>
	);
}
