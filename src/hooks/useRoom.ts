import { useEffect, useState } from 'react';
import { database } from '../services/firebase';

type FirebaseQuestions = Record<string, {
	author: {
		name: string;
		avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
}>

type QuestionType = {
	id: string;
	author: {
		name: string;
		avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
}

type UseRoomData = {
	title: string;
	questions: QuestionType[];
}

export function useRoom(roomId: string): UseRoomData {
	const [questions, setQuestions] = useState<QuestionType[]>([]);
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

	return { title, questions };
}