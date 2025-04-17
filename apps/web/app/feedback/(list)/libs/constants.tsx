import { MessagesSquare } from "lucide-react";
import { InferType, number, object, string } from "yup";

import { BreadcrumbLinkItem } from "@/layouts/DashboardLayout/Breadcrumb";

export const queryKey = {
  FEEDBACK_LIST: "FEEDBACK_LIST",
  FEEDBACK_DETAIL: "FEEDBACK_DETAIL",
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

export const statusOptionsObj: {
  [key: string]: { label: string; value: number };
} = {
  pending: {
    label: "Belum Selesai",
    value: 1,
  },
  resolved: {
    label: "Selesai",
    value: 2,
  },
  waiting: {
    label: "Menunggu",
    value: 3,
  },
  in_progress: {
    label: "Dalam Proses",
    value: 4,
  },
};

export const statusOptionList: OptionItem[] = Object.entries(
  statusOptionsObj
).map(([, value]) => ({
  id: value.value,
  name: value.label,
}));
