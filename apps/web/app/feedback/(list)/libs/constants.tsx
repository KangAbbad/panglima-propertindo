import { MessagesSquare } from "lucide-react";
import { InferType, number, object, string } from "yup";

import FeedbackImage1 from "@/assets/images/feedback-image-1.jpg";
import { BreadcrumbLinkItem } from "@/layouts/DashboardLayout/Breadcrumb";
import { FeedbackItemType } from "../components/FeedbackItem";

export const queryKey = {
  FEEDBACK_LIST: "FEEDBACK_LIST",
};

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
};

export const statusOptionList: OptionItem[] = [
  {
    id: 1,
    name: "Belum Selesai",
  },
  {
    id: 2,
    name: "Selesai",
  },
];

export const feedbackList: FeedbackItemType[] = [
  {
    id: "A12-75-111124",
    imageUrl: FeedbackImage1,
    status: 2,
    date: "20 November 2024, 14:20",
    category: "Fasilitas Umum & Lingkungan",
    subCategories: ["Drainase Lingkungan", "Lingkungan", "+2"],
    description:
      "Drainase Lingkungan bermasalah, Listrik terkena hujan, Keamanan & kebersihan tidak terjaga",
    tag: "F9 - Kavling",
    rating: {
      csa: 5,
      konstruksi: 5,
    },
    hasReview: true,
  },
  {
    id: "A12-75-111124",
    imageUrl: FeedbackImage1,
    status: 1,
    date: "20 November 2024, 14:20",
    category: "Fasilitas Umum & Lingkungan",
    subCategories: ["Drainase Lingkungan", "Linkungan", "+2"],
    description:
      "Drainase Lingkungan bermasalah, Listrik terkena hujan, Keamanan & kebersihan tidak terjaga",
    tag: "F9 - Kavling",
    rating: null,
    hasReview: true,
  },
  {
    id: "A12-75-111124",
    imageUrl: FeedbackImage1,
    status: 1,
    date: "20 November 2024, 14:20",
    category: "Fasilitas Umum & Lingkungan",
    subCategories: ["Drainase Lingkungan", "Linkungan", "+2"],
    description:
      "Drainase Lingkungan bermasalah, Listrik terkena hujan, Keamanan & kebersihan tidak terjaga",
    tag: "F9 - Kavling",
    rating: null,
    hasReview: true,
  },
  {
    id: "A12-75-111124",
    imageUrl: FeedbackImage1,
    status: 1,
    date: "20 November 2024, 14:20",
    category: "Fasilitas Umum & Lingkungan",
    subCategories: ["Drainase Lingkungan", "Linkungan", "+2"],
    description:
      "Drainase Lingkungan bermasalah, Listrik terkena hujan, Keamanan & kebersihan tidak terjaga",
    tag: "F9 - Kavling",
    rating: {
      csa: null,
      konstruksi: null,
    },
    hasReview: false,
  },
  {
    id: "A12-75-111124",
    imageUrl: null,
    status: 1,
    date: "20 November 2024, 14:20",
    category: "Fasilitas Umum & Lingkungan",
    subCategories: ["Drainase Lingkungan", "Linkungan", "+2"],
    description:
      "Drainase Lingkungan bermasalah, Listrik terkena hujan, Keamanan & kebersihan tidak terjaga",
    tag: "F9 - Kavling",
    rating: null,
    hasReview: true,
  },
  {
    id: "A12-75-111124",
    imageUrl: FeedbackImage1,
    status: 1,
    date: "20 November 2024, 14:20",
    category: "Fasilitas Umum & Lingkungan",
    subCategories: ["Drainase Lingkungan", "Linkungan", "+2"],
    description:
      "Drainase Lingkungan bermasalah, Listrik terkena hujan, Keamanan & kebersihan tidak terjaga",
    tag: "F9 - Kavling",
    rating: {
      csa: null,
      konstruksi: null,
    },
    hasReview: false,
  },
];
