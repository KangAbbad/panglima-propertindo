import { apiFetch, endpoints } from "@/services/endpoints";
import { AxiosResponse } from "axios";
import { InferType, number, object, string } from "yup";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FeedbackItemSchema = object({
  id: number().required(),
  category: string().required(),
  sub_category: string().required(),
  unit: string().required(),
  status: string().required(),
  keluhan: string().required(),
  created_at: string().required(),
});

type FeedbackItem = InferType<typeof FeedbackItemSchema>;

export async function getList() {
  const res: AxiosResponse<FeedbackItem[]> = await apiFetch({
    method: "GET",
    url: endpoints.feedback,
  });
  return res.data;
}
