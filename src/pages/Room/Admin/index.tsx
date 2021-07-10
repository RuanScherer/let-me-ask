import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../../components/Button/';
import { Question } from '../../../components/Question/';
import { RoomCode } from '../../../components/RoomCode/';
import { Header } from '../../../components/Header';
import { TotalQuestionsIndicator } from '../../../components/TotalQuestionsIndicator';
import { StyledQuestionButton, StyledQuestionLikeCount } from '../../../components/Question/styles';
import {
	StyledQuestionsList,
	StyledRoomInfoContainer,
	StyledRoomName,
	StyledRoomPageContainer,
} from '../styles';
import { useRoom } from '../../../hooks/useRoom';
import { database } from '../../../services/firebase';
import deleteIcon from '../../../assets/images/delete.svg';
import checkIcon from '../../../assets/images/check.svg';
import answerIcon from '../../../assets/images/answer.svg';

type AdminRoomParams = {
	id: string;
}

export function AdminRoom(): JSX.Element {
	const params = useParams<AdminRoomParams>();
	const roomId = params.id;
	const { room, title, questions } = useRoom(roomId);
	const history = useHistory();
	const { user } = useAuth();

	useEffect(() => {
		if (room && user) {
			if (room.closedAt || room.authorId !== user?.id) {
				history.goBack();
			}
		}
	}, [room, user]);

	async function handleCheckQuestionAsAnswered(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isAnswered: true
		});
	}

	async function handleToggleQuestionHighlight(questionId: string, isHighlighted: boolean) {
		console.log(isHighlighted);
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isHighlighted: !isHighlighted
		});
	}

	async function handleDeleteQuestion(questionId: string) {
		if (!questionId) return;

		const confirmed = window.confirm('Tem certeza que deseja excluir essa pergunta?');

		if (confirmed) {
			await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
		}
	}

	async function handleCloseRoom() {
		await database.ref(`rooms/${roomId}`).update({
			closedAt: new Date()
		});

		history.push('/');
	}

	if (!room || !user) {
		return (
			<div></div>
		);
	}

	return (
		<>
			<Header>
				<RoomCode roomCode={roomId} />
				<Button isOutlined onClick={handleCloseRoom}>Fechar sala</Button>
			</Header>

			<StyledRoomPageContainer>
				<StyledRoomInfoContainer>
					<StyledRoomName>{title}</StyledRoomName>

					<TotalQuestionsIndicator questionsCount={questions.length} />
				</StyledRoomInfoContainer>

				<StyledQuestionsList>
					{questions.map(question => (
						<Question
							content={question.content}
							author={question.author}
							key={question.id}
							isAnswered={question.isAnswered}
							isHighlighted={question.isHighlighted}
						>
							{question.likeCount > 0 && <StyledQuestionLikeCount>{question.likeCount} like(s)</StyledQuestionLikeCount>}

							{!question.isAnswered && (
								<>
									<StyledQuestionButton onClick={() => handleCheckQuestionAsAnswered(question.id)}>
										<img src={checkIcon} alt="" />
									</StyledQuestionButton>

									<StyledQuestionButton onClick={() => handleToggleQuestionHighlight(question.id, question.isHighlighted)}>
										<img src={answerIcon} alt="" />
									</StyledQuestionButton>
								</>
							)}

							<StyledQuestionButton onClick={() => handleDeleteQuestion(question.id)}>
								<img src={deleteIcon} alt="" />
							</StyledQuestionButton>
						</Question>
					))}
				</StyledQuestionsList>
			</StyledRoomPageContainer>
		</>
	);
}
