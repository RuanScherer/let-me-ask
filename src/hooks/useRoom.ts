import { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type FirebaseQuestions = Record<string, {
	author: {
		name: string;
		avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
	likes: Record<string, {
		authorId: string;
	}>
}>

type RoomType = {
	authorId: string;
	title: string;
	closedAt: Date;
	questions: QuestionType[];
}

type QuestionType = {
	id: string;
	author: {
		name: string;
		avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
	likeCount: number;
	likeId: string | undefined;
}

type UseRoomData = {
	room: RoomType;
	title: string;
	questions: QuestionType[];
}

export function useRoom(roomId: string): UseRoomData {
	const { user } = useAuth();
	const [room, setRoom] = useState<RoomType>({} as RoomType);
	const [questions, setQuestions] = useState<QuestionType[]>([]);
	const [title, setTitle] = useState('');

	useEffect(() => {
		const roomRef = database.ref(`rooms/${roomId}`);

		roomRef.on('value', room => {
			const firebaseRoom = room.val();
			const firebaseQuestions = firebaseRoom.questions as FirebaseQuestions;
			let parsedQuestions = Object.entries(firebaseQuestions ?? {}).map(([key, value]) => {
				return {
					id: key,
					content: value.content,
					author: value.author,
					isHighlighted: value.isHighlighted,
					isAnswered: value.isAnswered,
					likeCount: Object.values(value.likes ?? {}).length,
					likeId: Object.entries(value.likes ?? {}).find(([, like]) => like.authorId === user?.id)?.[0]
				};
			});

			parsedQuestions = parsedQuestions.sort((a, b) => b.likeCount - a.likeCount);
			console.log(parsedQuestions);

			setRoom(firebaseRoom);
			setTitle(firebaseRoom.title);
			setQuestions(parsedQuestions);
		});

		return () => roomRef.off('value');
	}, [roomId, user?.id]);

	return { room, title, questions };
}