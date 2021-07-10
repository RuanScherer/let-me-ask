import styled from 'styled-components';

type StyledQuestionButtonProps = {
	likeButton?: boolean;
	liked?: boolean;
}

export const StyledQuestion = styled.li`
	background-color: var(--light-background-color);
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(255, 174, 174, 0.04);
	padding: 1.5rem;

	& + & {
		margin: .5rem 0;
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
	margin-top: 1.5rem;

	> div {
		display: flex;
		gap: 1rem;
	}

	@media screen and (max-width: 450px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1.1rem;

		> div:nth-child(2) {
			align-self: flex-end;
		}
	}
`;

export const StyledQuestionLikeCount = styled.span`
	display: flex;
	align-items: center;
	color: var(--primary-color);
	font-weight: 500;
	font-size: .95rem;
	text-align: center;
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
		gap: .5rem;
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
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}

	span {
		margin-left: .5rem;
		color: var(--light-text-color);
		font-size: .95rem;
	}
`;
