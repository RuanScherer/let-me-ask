import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';
import { StyledLogoutButton } from './styles';

export function LogoutButton(): JSX.Element {
	const { user, signOut } = useAuth();

	async function handleLogout() {
		toast.promise(
			signOut(),
			{
				loading: 'Encerrando sua sessão',
				error: 'Falha ao encerrar sessão',
				success: 'Sessão encerrada'
			}
		);
	}

	if (!user) {
		return (
			<></>
		);
	}

	return (
		<>
			<Toaster />
			<StyledLogoutButton onClick={handleLogout}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<title>Encerrar sessão</title>
					<path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</StyledLogoutButton>
		</>
	);
}
