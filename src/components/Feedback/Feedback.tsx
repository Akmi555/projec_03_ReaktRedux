
import Button from "../Button/Button";
import {
  FeedbackComponent,
  FeedbackResultComponent,
  LikeDislikeComponent,
  Fontesult,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { feedbackSliceActions,feedbackSliceSelectors} from "../../store/redax/feedback/feedbackSlice";

function Feedback() {  
  const countLike = useAppSelector(feedbackSliceSelectors.like)
  const countDislike = useAppSelector(feedbackSliceSelectors.dislike)

  const dispatch = useAppDispatch();

  const onLike = () => {
    dispatch(feedbackSliceActions.like())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike())
  }

  const onReset = () => {
    dispatch(feedbackSliceActions.like())
  }


  return (
    <FeedbackComponent>
      <FeedbackResultComponent>
        <LikeDislikeComponent>
          <Fontesult>{countLike}</Fontesult>
          <Button name="LIKE" onButtonClick={onLike} />
        </LikeDislikeComponent>
        <LikeDislikeComponent>
          <Button name="DISLIKE" onButtonClick={onDislike} />
          <Fontesult>{countDislike}</Fontesult>
        </LikeDislikeComponent>
      </FeedbackResultComponent>
      {/* <Button name="RESET RESULT" onButtonClick={onReset} /> */}
    </FeedbackComponent>
  );
}

export default Feedback;
