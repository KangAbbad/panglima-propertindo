import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { queryKey } from "./libs/constants";
import FeedbackListPage from "./page.client";
import { getList } from "./services/get";

export const dynamic = "force-dynamic";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queryKey.FEEDBACK_LIST],
    queryFn: getList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FeedbackListPage />
    </HydrationBoundary>
  );
}
