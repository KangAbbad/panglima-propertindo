import axios, { AxiosRequestConfig } from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export async function apiFetch(options?: AxiosRequestConfig) {
  const response = await axiosInstance({ ...options });
  return response;
}

type EndpointStringPatternType = `/${string}`;
type EndpointsType = {
  feedback: EndpointStringPatternType;
  feedbackCategories: EndpointStringPatternType;
  feedbackSubCategories: EndpointStringPatternType;
};

export const endpoints: EndpointsType = {
  feedback: "/feedback",
  feedbackCategories: "/feedback-category",
  feedbackSubCategories: "/feedback-sub-category",
};
