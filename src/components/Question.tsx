import { ReactNode } from 'react';
import classnames from 'classnames';
import '../styles/question.scss';

type QuestionProps = {
	content: string;
	author: {
		name: string;
		avatar: string;
	},
	children?: ReactNode;
	isAnswered?: boolean;
	isHighlighted?: boolean;
}

export function Question({
	content,
	author,
	isAnswered = false,
	isHighlighted = false,
	children
}: QuestionProps): JSX.Element {
	return (
		<li
			className={classnames(
				'question',
				{ answered: isAnswered },
				{ highlighted: isHighlighted && !isAnswered }
			)}
			data-testid="question"
		>
			<p>{content}</p>

			<footer>
				<div className="user-info">
					<img
						src={author.avatar}
						alt=""
						data-testid="user-avatar"
					/>
					<span>{author.name}</span>
				</div>

				<div>
					{children}
				</div>
			</footer>
		</li>
	);
}