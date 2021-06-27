import { render, screen } from '@testing-library/react';
import { Question } from './Question';

describe('Question Component', () => {
	const content = 'Como funcionam os hooks do react?';
	const author = {
		name: 'Ruan Scherer',
		avatar: 'https://avatars.githubusercontent.com/u/50061559?v=4'
	};

	test('Show content', () => {
		renderDefaultComponent();

		expect(screen.getByText(content)).toBeInTheDocument();
	});

	describe('Show author', () => {
		test('Name', () => {
			renderDefaultComponent();

			expect(screen.getByText(author.name)).toBeInTheDocument();
		});

		test('Avatar', () => {
			renderDefaultComponent();

			const userAvatar = screen.getByTestId('user-avatar');

			expect(userAvatar).toHaveProperty('src', author.avatar);
		});
	});

	test('If it was answered, it must have the class isAnswered', () => {
		render(
			<Question
				content={content}
				author={author}
				isAnswered
			/>
		);

		expect(screen.getByTestId('question')).toHaveClass('answered');
	});

	test('If it is highlighted, it must have the class highlighted', () => {
		render(
			<Question
				content={content}
				author={author}
				isHighlighted
			/>
		);

		expect(screen.getByTestId('question')).toHaveClass('highlighted');
	});

	function renderDefaultComponent() {
		render(
			<Question
				content={content}
				author={author}
			/>
		);
	}
});

export { };
