import { apiFetch, endpoints } from "@/services/endpoints";
import { AxiosResponse } from "axios";
import { InferType, number, object, string } from "yup";

const CreateFeedbackPayload = object({
  unit: string().required("Unit wajib diisi!").default(""),
  id_category: number().required("Kategori wajib diisi!").default(0),
  id_sub_category: number().required("Sub kategori wajib diisi!").default(0),
  keluhan: string().required("Keluhan wajib diisi!").default(""),
});

export type CreateFeedbackPayload = InferType<typeof CreateFeedbackPayload>;

const CreateFeedbackResponse = object({
  message: string().required().default(""),
  data: object({
    id: number().required().positive().integer(),
    id_category: number().required().positive().integer(),
    id_sub_category: number().required().positive().integer(),
    unit: string().required(),
    status: string().required(),
    keluhan: string().required(),
    created_at: string().required(),
  }).required(),
});

type CreateFeedbackResponse = InferType<typeof CreateFeedbackResponse>;

export async function createFeedback(data: CreateFeedbackPayload) {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key as keyof CreateFeedbackPayload].toString());
  }
  const res: AxiosResponse<CreateFeedbackResponse> = await apiFetch({
    method: "POST",
    url: endpoints.feedback,
    data: formData,
  });
  return res.data;
}
