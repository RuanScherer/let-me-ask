import { useParams, useHistory } from 'react-router-dom';
import { Button } from '../../../components/Button/';
import { Question } from '../../../components/Question/';
import { RoomCode } from '../../../components/RoomCode/';
import { useRoom } from '../../../hooks/useRoom';
import { database } from '../../../services/firebase';
import logoImg from '../../../assets/images/logo.svg';
import deleteIcon from '../../../assets/images/delete.svg';
import checkIcon from '../../../assets/images/check.svg';
import answerIcon from '../../../assets/images/answer.svg';
import '../index.scss';

type AdminRoomParams = {
	id: string;
}

export function AdminRoom(): JSX.Element {
	const params = useParams<AdminRoomParams>();
	const roomId = params.id;
	const { title, questions } = useRoom(roomId);
	const history = useHistory();

	async function handleCheckQuestionAsAnswered(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isAnswered: true
		});
	}

	async function handleHighlightQuestion(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isHighlighted: true
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

	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img src={logoImg} alt="" />

					<div>
						<RoomCode roomCode={roomId} />
						<Button isOutlined onClick={handleCloseRoom}>Encerrar sala</Button>
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
						<Question
							content={question.content}
							author={question.author}
							key={question.id}
							isAnswered={question.isAnswered}
							isHighlighted={question.isHighlighted}
						>
							{question.likeCount > 0 && <span className="like-count">{question.likeCount} like(s)</span>}

							{!question.isAnswered && (
								<>
									<button
										type="button"
										onClick={() => handleCheckQuestionAsAnswered(question.id)}
									>
										<img src={checkIcon} alt="" />
									</button>

									<button
										type="button"
										onClick={() => handleHighlightQuestion(question.id)}
									>
										<img src={answerIcon} alt="" />
									</button>
								</>
							)}

							<button
								type="button"
								onClick={() => handleDeleteQuestion(question.id)}
							>
								<img src={deleteIcon} alt="" />
							</button>
						</Question>
					))}
				</ul>
			</main>
		</div>
	);
}
