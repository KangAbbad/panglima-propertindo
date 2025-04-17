import { AxiosResponse } from "axios";
import { InferType, number, object, string } from "yup";

import { apiFetch, endpoints } from "@/services/endpoints";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FeedbackCategoryItemSchema = object({
  id: number().required(),
  name: string().required(),
});

type FeedbackCategoryItem = InferType<typeof FeedbackCategoryItemSchema>;

export async function getCategoryList() {
  const res: AxiosResponse<FeedbackCategoryItem[]> = await apiFetch({
    method: "GET",
    url: endpoints.feedbackCategories,
  });
  return res.data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FeedbackSubCategoryItemSchema = object({
  id: number().required(),
  id_category: number().required(),
  name: string().required(),
});

type FeedbackSubCategoryItem = InferType<typeof FeedbackSubCategoryItemSchema>;

const FeedbackSubCategoryListParams = object({
  id_category: number(),
});

type FeedbackSubCategoryListParams = InferType<
  typeof FeedbackSubCategoryListParams
>;

export async function getSubCategoryList(
  params: FeedbackSubCategoryListParams
) {
  const res: AxiosResponse<FeedbackSubCategoryItem[]> = await apiFetch({
    method: "GET",
    url: endpoints.feedbackSubCategories,
    params,
  });
  return res.data;
}
