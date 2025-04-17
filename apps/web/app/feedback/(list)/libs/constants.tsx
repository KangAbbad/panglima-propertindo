import { MessagesSquare } from "lucide-react";
import { InferType, number, object, string } from "yup";

import { BreadcrumbLinkItem } from "@/layouts/DashboardLayout/Breadcrumb";

export const queryKey = {
  FEEDBACK_LIST: "FEEDBACK_LIST",
  FEEDBACK_DETAIL: "FEEDBACK_DETAIL",
  FEEDBACK_CATEGORY_LIST: "FEEDBACK_CATEGORY_LIST",
  FEEDBACK_SUBCATEGORY_LIST: "FEEDBACK_SUBCATEGORY_LIST",
};

export const feedbackImagesLocalStorageKey = "feedbackImages";

export const breadcrumbLinks: BreadcrumbLinkItem[] = [
  {
    icon: <MessagesSquare size={16} />,
    label: "Feedback",
    href: "/feedback",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const optionItemSchema = object({
  id: number(),
  name: string(),
});
export type OptionItem = InferType<typeof optionItemSchema>;

export const feedbackNumbers: string[] = ["A12-75-111124", "A12-75-111120"];

export const unitOptions: OptionItem[] = [
  {
    id: 1,
    name: "Unit Bangunan/Kavling",
  },
  {
    id: 2,
    name: "Fasilitas Umum & Lingkungan",
  },
  {
    id: 3,
    name: "Pembayaran",
  },
  {
    id: 4,
    name: "Legal & Akad",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StatusOptionSchema = object({
  label: string(),
  value: string(),
});
type StatusOption = InferType<typeof StatusOptionSchema>;

export const statusOptionsObj: {
  [key: string]: StatusOption;
} = {
  pending: {
    label: "Belum Selesai",
    value: "pending",
  },
  resolved: {
    label: "Selesai",
    value: "resolved",
  },
  waiting: {
    label: "Menunggu",
    value: "waiting",
  },
  in_progress: {
    label: "Dalam Proses",
    value: "in_progress",
  },
};

export const statusOptionList: StatusOption[] = Object.entries(
  statusOptionsObj
).map(([, value]) => value);
