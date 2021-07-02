import { ReactNode } from 'react';
import classnames from 'classnames';
import { StyledQuestion, StyledQuestionFooter, StyledQuestionText, StyledUserInfo } from './styles';

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
		<StyledQuestion
			className={classnames(
				{ answered: isAnswered },
				{ highlighted: isHighlighted && !isAnswered }
			)}
			data-testid="question"
		>
			<StyledQuestionText>{content}</StyledQuestionText>

			<StyledQuestionFooter>
				<StyledUserInfo>
					<img
						src={author.avatar}
						alt=""
						data-testid="user-avatar"
					/>
					<span>{author.name}</span>
				</StyledUserInfo>

				<div>
					{children}
				</div>
			</StyledQuestionFooter>
		</StyledQuestion>
	);
}