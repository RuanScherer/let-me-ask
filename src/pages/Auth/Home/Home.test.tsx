import { render, screen } from '@testing-library/react';
import { Home } from './';

describe('Home Page', () => {

	describe('On open page', () => {
		beforeEach(() => {
			render(<Home />);
		});

		test('Show Google sign in button', () => {
			expect(screen.getByText('Crie sua sala com o Google')).toBeInTheDocument();
		});

		describe('Room code input', () => {
			test('Is shown', () => {
				expect(getRoomCodeInputByTestId()).toBeInTheDocument();
			});

			test('Is a text input', () => {
				const inputType = getRoomCodeInputByTestId().getAttribute('type');
				expect(inputType?.toLowerCase()).toBe('text');
			});

			test('Is required', () => {
				expect(getRoomCodeInputByTestId()).toBeRequired();
			});

			test('Has label', () => {
				expect(screen.getByLabelText('Código da sala')).toBe(getRoomCodeInputByTestId());
			});

			function getRoomCodeInputByTestId() {
				const roomCodeInput = screen.getByTestId('room-code');
				return roomCodeInput;
			}
		});

		test('Show join room button', () => {
			expect(screen.getByText('Entrar na sala')).toBeInTheDocument();
		});
	});
});

export { };
