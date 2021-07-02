import { render, screen } from '@testing-library/react';
import { TotalQuestionsIndicator } from './';

describe('Total Questions Indicator Component', () => {
	test('Show questions count', () => {
		render(<TotalQuestionsIndicator questionsCount={3} />);

		expect(screen.getByText(/3/)).toBeInTheDocument();
	});

	test('Snapshot must be always the same', () => {
		const { container } = render(<TotalQuestionsIndicator questionsCount={5} />);

		expect(container.firstChild).toMatchSnapshot();
	});
});

export { };
