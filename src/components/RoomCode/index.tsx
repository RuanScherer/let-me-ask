import copyImg from '../../assets/images/copy.svg';
import './index.scss';

type RoomCodeProps = {
	roomCode: string;
}

export function RoomCode(props: RoomCodeProps): JSX.Element {
	function copyRoomCodeToClipboard() {
		navigator.clipboard.writeText(props.roomCode);
	}

	return (
		<button className="room-code" onClick={copyRoomCodeToClipboard}>
			<div>
				<img src={copyImg} alt="" />
			</div>

			<span>Sala #{props.roomCode}</span>
		</button>
	);
}