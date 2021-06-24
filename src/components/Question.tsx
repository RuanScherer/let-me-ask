import { ReactNode } from 'react';
import '../styles/question.scss';

type QuestionProps = {
	content: string;
	author: {
		name: string;
		avatar: string;
	},
	children?: ReactNode;
}

export function Question(props: QuestionProps): JSX.Element {
	return (
		<li className="question">
			<p>{props.content}</p>

			<footer>
				<div className="user-info">
					<img src={props.author.avatar} alt="" />
					<span>{props.author.name}</span>
				</div>

				<div>
					{props.children}
				</div>
			</footer>
		</li>
	);
}