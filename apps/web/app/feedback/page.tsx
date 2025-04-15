import {
  House,
  MessageSquare,
  MessagesSquare,
  PlusSquare,
  Search,
} from "lucide-react";
import { InferType, number, object, string } from "yup";

import { FeedbackItem, FeedbackItemType } from "./components/FeedbackItem";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Button } from "@workspace/ui/components/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@workspace/ui/components/select";
import { Input, InputIcon, InputRoot } from "@workspace/ui/components/input";
import ChatBubbleLeftRightIcon from "@/assets/icons/chat-bubble-left-right-icon.svg";
import FeedbackImage1 from "@/assets/images/feedback-image-1.jpg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const optionItemSchema = object({
  id: number(),
  name: string(),
});
type OptionItem = InferType<typeof optionItemSchema>;

const Page = () => {
  const feedbackNumbers: string[] = ["A12-75-111124", "A12-75-111120"];
  const unitOptions: OptionItem[] = [
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
  const statusOptions: OptionItem[] = [
    {
      id: 1,
      name: "Belum Selesai",
    },
    {
      id: 2,
      name: "Selesai",
    },
  ];
  const feedbackList: FeedbackItemType[] = [
    {
      id: "A12-75-111124",
      imageUrl: FeedbackImage1,
      status: 2,
      date: "20 November 2024, 14:20",
      category: "Fasilitas Umum & Lingkungan",
      subCategories: ["Drainase Lingkungan", "Linkungan", "+2"],
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

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between">
        <Breadcrumb>
          <BreadcrumbList className="rounded-md bg-white p-3">
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#" className="text-foreground">
                <House size={16} />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block text-foreground">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                className="flex items-center gap-2 text-foreground"
              >
                <MessagesSquare size={16} /> Feedback
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button className="h-auto py-3 !px-8">
          <PlusSquare /> Buat Feedback
        </Button>
      </div>
      <div className="border border-primary rounded-lg bg-white space-y-5 px-4 py-[26px]">
        <div className="flex items-center gap-2">
          <ChatBubbleLeftRightIcon />
          <h1 className="text-foreground text-lg font-semibold">
            Jangan Lupa Untuk Memberi Ulasan!
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Sepertinya Anda belum memberikan ulasan untuk Feedback yang sudah
          selesai di bawah ini
        </p>
        <div className="flex items-center gap-2">
          {feedbackNumbers.map((feedbackNumber, feedbackIdx) => (
            <Button
              key={`${feedbackNumber}-${feedbackIdx}`}
              className="text-sm h-auto py-2 !px-4"
            >
              <MessageSquare /> {feedbackNumber}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <h2 className="text-foreground text-lg font-semibold">
          Daftar Feedback
        </h2>
        <div className="flex gap-5 items-center">
          <Select>
            <SelectTrigger className="bg-white !h-11 w-[180px]">
              <SelectValue placeholder="Unit" />
            </SelectTrigger>
            <SelectContent>
              {unitOptions.map((unitOption, unitIdx) => (
                <SelectItem
                  key={`${unitOption.name}-${unitIdx}`}
                  value={`${unitOption.id}`}
                >
                  {unitOption.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-white !h-11 w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((statusOption, statusIdx) => (
                <SelectItem
                  key={`${statusOption.name}-${statusIdx}`}
                  value={`${statusOption.id}`}
                >
                  {statusOption.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <InputRoot>
            <InputIcon className="text-muted-foreground size-4 h-7 [&~input]:pl-9">
              <Search />
            </InputIcon>
            <Input
              className="bg-white outline-primary !h-11 w-[180px]"
              placeholder="Cari no. Tiket"
            />
          </InputRoot>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {feedbackList.map((feedbackItem, feedbackIdx) => {
          return (
            <FeedbackItem
              key={`${feedbackItem.id}-${feedbackIdx}`}
              {...feedbackItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
