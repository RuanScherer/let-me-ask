import copyImg from '../../assets/images/copy.svg';
import { StyledRoomCode } from './styles';

type RoomCodeProps = {
	roomCode: string;
}

export function RoomCode(props: RoomCodeProps): JSX.Element {
	function copyRoomCodeToClipboard() {
		navigator.clipboard.writeText(props.roomCode);
	}

	return (
		<StyledRoomCode onClick={copyRoomCodeToClipboard} title="Copiar código da sala">
			<div>
				<img src={copyImg} alt="" />
			</div>

			<span>Sala #{props.roomCode}</span>
		</StyledRoomCode>
	);
}