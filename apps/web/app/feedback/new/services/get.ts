import { AxiosResponse } from "axios";
import { InferType, number, object, string } from "yup";

import { apiFetch, endpoints } from "@/services/endpoints";

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

const CreateFeedbackPayload = object({
  unit: string().required("Unit wajib diisi!").default(""),
  id_category: number().required("Kategori wajib diisi!").default(0),
  id_sub_category: number().required("Sub kategori wajib diisi!").default(0),
  keluhan: string().required("Keluhan wajib diisi!").default(""),
});

export type CreateFeedbackPayload = InferType<typeof CreateFeedbackPayload>;

export async function createFeedback(data: CreateFeedbackPayload) {
  const res: AxiosResponse = await apiFetch({
    method: "POST",
    url: endpoints.feedback,
    data,
  });
  return res.data;
}
