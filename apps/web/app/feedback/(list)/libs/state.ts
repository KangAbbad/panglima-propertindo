import { createGlobalState } from "@/utils/createGlobalState";
import { queryKey } from "./constants";
import { FeedbackItemType } from "../components/FeedbackItem";

export const feedbackDetailStore = createGlobalState<FeedbackItemType>({
  queryKey: [queryKey.FEEDBACK_DETAIL],
  initialData: null,
});
