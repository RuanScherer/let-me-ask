import { StyledRoomQuestionsCounter } from './styles';

type TotalQuestionsIndicatorProps = {
	questionsCount: number;
}

export function TotalQuestionsIndicator({ questionsCount }: TotalQuestionsIndicatorProps): JSX.Element {

	if (questionsCount > 0) {
		return (
			<StyledRoomQuestionsCounter>
				{questionsCount} pergunta(s)
			</StyledRoomQuestionsCounter>
		);
	}

	return (
		<></>
	);

}
