import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import logoImg from '../assets/images/logo.svg';
import '../styles/room.scss';

type AdminRoomParams = {
	id: string;
}

export function AdminRoom(): JSX.Element {
	const params = useParams<AdminRoomParams>();
	const roomId = params.id;
	const { title, questions } = useRoom(roomId);

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
