import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { NewRoom } from './NewRoom';

describe('New Room Page', () => {

	describe('On open page', () => {
		beforeEach(() => {
			render(
				<BrowserRouter>
					<NewRoom />
				</BrowserRouter>
			);
		});

		test('Show page title', () => {
			expect(screen.getByText('Criar uma nova sala')).toBeInTheDocument();
		});

		describe('Room name input', () => {
			test('Is shown', () => {
				expect(getRoomNameInputByTestId()).toBeInTheDocument();
			});

			test('Is a text input', () => {
				const inputType = getRoomNameInputByTestId().getAttribute('type');
				expect(inputType?.toLowerCase()).toBe('text');
			});

			test('Is required', () => {
				expect(getRoomNameInputByTestId()).toBeRequired();
			});

			test('Has label', () => {
				expect(screen.getByLabelText('Nome da sala')).toBe(getRoomNameInputByTestId());
			});

			function getRoomNameInputByTestId() {
				const roomCodeInput = screen.getByTestId('room-name');
				return roomCodeInput;
			}
		});

		test('Show create room button', () => {
			expect(screen.getByText('Criar sala')).toBeInTheDocument();
		});

		test('Show link to home page', () => {
			const link = screen.getByText('Clique aqui');
			expect(screen.getByText('Quer entrar em uma sala existente?')).toBeInTheDocument();
			expect(link).toBeInTheDocument();
		});
	});
});

export { };
