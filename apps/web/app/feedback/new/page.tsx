import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import FeedbackFormPage from "./page.client";
import { queryKey as queryKeyFeedbackList } from "../(list)/libs/constants";
import { getCategoryList } from "../(list)/services/get";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queryKeyFeedbackList.FEEDBACK_CATEGORY_LIST],
    queryFn: getCategoryList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FeedbackFormPage />
    </HydrationBoundary>
  );
}
