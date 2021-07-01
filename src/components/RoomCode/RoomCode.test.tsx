import { render, screen } from '@testing-library/react';
import { RoomCode } from './';

describe('Room Code Component', () => {
	test('Show room code', () => {
		const code = '-Ab-1jH-';
		render(<RoomCode roomCode={code} />);

		expect(screen.getByText(/-Ab-1jH-/)).toBeInTheDocument();
	});

	test('Snapshot must always be the same', () => {
		const { container } = render(<RoomCode roomCode="-Ab-1jH-" />);

		expect(container.firstChild).toMatchSnapshot();
	});
});

export { };
