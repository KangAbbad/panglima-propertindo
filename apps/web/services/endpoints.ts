export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

type ApiFetchType = {
  endpoint: `/${string}`;
  options?: RequestInit;
};

export async function apiFetch<T>(params: ApiFetchType): Promise<T> {
  const { endpoint, options } = params;
  const res = await fetch(`${baseUrl}${endpoint}`, options);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

type EndpointStringPatternType = `/${string}`;
type EndpointsType = {
  feedback: EndpointStringPatternType;
};

export const endpoints: EndpointsType = {
  feedback: "/feedback",
};
