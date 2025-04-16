import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import FeedbackFormPage from "./page.client";
import { queryKey } from "./libs/constants";
import { getCategoryList } from "./services/get";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queryKey.FEEDBACK_CATEGORY_LIST],
    queryFn: getCategoryList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FeedbackFormPage />
    </HydrationBoundary>
  );
}
