import styled from 'styled-components';

type StyledQuestionButtonProps = {
	likeButton?: boolean;
	liked?: boolean;
}

export const StyledQuestion = styled.li`
	background-color: var(--light-background-color);
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(255, 174, 174, 0.04);
	padding: 24px;

	& + & {
		margin: 8px 0;
	}

	&.highlighted {
		background-color: #f4f0ff;
		border: 1px solid var(--primary-color);

		footer .user-info span {
			color: var(--default-text-color);
		}
	}

	&.answered {
		background-color: #dbdcdd;
	}
`;

export const StyledQuestionText = styled.p`
	p {
		color: var(--default-text-color);
	}
`;

export const StyledQuestionFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 24px;

	> div {
		display: flex;
		gap: 16px;
	}
`;

export const StyledQuestionLikeCount = styled.span`
	display: flex;
	align-items: center;
	color: var(--primary-color);
	font-weight: 500;
	font-size: 14px;
`;

export const StyledQuestionButton = styled.button.attrs({ type: 'button' }) <StyledQuestionButtonProps>`
	border: 0;
	background: transparent;
	cursor: pointer;
	transition: filter 0.2s;

	${props => props.likeButton && `
		display: flex;
		align-items: flex-end;
		color: var(--light-text-color);
		gap: 8px;
	`}

	${props => props.likeButton && props.liked && `
		color: var(--primary-color);

		svg path {
			stroke: var(--primary-color);
		}
	`}

	&:hover {
		filter: brightness(0.7);
	}
`;

export const StyledUserInfo = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	span {
		margin-left: 8px;
		color: var(--light-text-color);
		font-size: 14px;
	}
`;
