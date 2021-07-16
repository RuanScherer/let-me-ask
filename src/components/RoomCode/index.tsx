import toast, { Toaster } from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg';
import { StyledRoomCode } from './styles';

type RoomCodeProps = {
	roomCode: string;
}

export function RoomCode(props: RoomCodeProps): JSX.Element {
	function copyRoomCodeToClipboard() {
		navigator.clipboard.writeText(props.roomCode);
		toast.success('Código da sala copiado para a área de transferência');
	}

	return (
		<>
			<Toaster />
			<StyledRoomCode onClick={copyRoomCodeToClipboard} title="Copiar código da sala">
				<div>
					<img src={copyImg} alt="" />
				</div>

				<span>Sala #{props.roomCode}</span>
			</StyledRoomCode>
		</>
	);
}