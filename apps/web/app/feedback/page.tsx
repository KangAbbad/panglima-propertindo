import {
  CalendarDays,
  Check,
  House,
  ImageIcon,
  ImageOff,
  LayoutGrid,
  LayoutList,
  MessageSquare,
  MessageSquareDashed,
  MessagesSquare,
  PlusSquare,
  RefreshCcw,
  Search,
  Star,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { array, boolean, InferType, mixed, number, object, string } from "yup";

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
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import ChatBubbleLeftRightIcon from "@/assets/icons/chat-bubble-left-right-icon.svg";
import FeedbackImage1 from "@/assets/images/feedback-image-1.jpg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const optionItemSchema = object({
  id: number(),
  name: string(),
});
type OptionItem = InferType<typeof optionItemSchema>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const feedbackItemSchema = object({
  id: string().required(),
  imageUrl: mixed<StaticImageData>().nullable(),
  status: number().oneOf([1, 2]).required(),
  date: string().required(),
  category: string().required(),
  subCategories: array(string()).required(),
  description: string().required(),
  tag: string().required(),
  rating: object({
    csa: number().min(0).max(5).nullable(),
    konstruksi: number().min(0).max(5).nullable(),
  }).nullable(),
  hasReview: boolean().default(false),
});
type FeedbackItem = InferType<typeof feedbackItemSchema>;

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
  const feedbackList: FeedbackItem[] = [
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
          const isStatusProgress = feedbackItem.status === 1;
          const isStatusComplete = feedbackItem.status === 2;

          return (
            <Card
              key={`${feedbackItem.id}-${feedbackIdx}`}
              className="gap-4 py-4"
            >
              <CardHeader className="flex px-4">
                {feedbackItem.imageUrl ? (
                  <div className="relative flex-1 rounded-lg overflow-hidden h-[180px]">
                    <Image
                      src={feedbackItem.imageUrl}
                      alt={feedbackItem.id}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute right-4 bottom-4 rounded-lg flex items-center gap-1 bg-white p-2">
                      <ImageIcon size={16} />
                      <span className="font-semibold text-sm text-foreground">
                        +2
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex flex-1 items-center justify-center rounded-lg overflow-hidden bg-secondary h-[180px]">
                    <ImageOff size={56} />
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4 px-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base text-foreground font-bold">
                      {feedbackItem.id}
                    </h3>
                    <div className="border border-primary bg-primary/10 rounded-full inline-block pb-[2px] px-[10px]">
                      <span className="text-primary text-xs font-medium">
                        {feedbackItem.tag}
                      </span>
                    </div>
                  </div>
                  <div className="border bg-muted rounded-full flex py-[2px] px-[10px]">
                    {isStatusProgress && (
                      <div className="flex items-center gap-2">
                        <RefreshCcw size={16} color="#FA9500" />
                        <span className="text-[#FA9500] text-xs font-medium">
                          Belum Selesai
                        </span>
                      </div>
                    )}
                    {isStatusComplete && (
                      <div className="flex items-center gap-2">
                        <Check size={16} className="text-primary" />
                        <span className="text-primary text-xs font-medium">
                          Selesai
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-muted-foreground" />
                  <span className="text-sm text-secondary-foreground">
                    {feedbackItem.date}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <LayoutGrid size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Kategori
                    </span>
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {feedbackItem.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <LayoutList size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Sub Kategori
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {feedbackItem.subCategories.map(
                      (subCategory, subCategoryIdx) => (
                        <span
                          key={`${subCategory}-${subCategoryIdx}`}
                          className="border rounded-md text-sm text-foreground font-medium py-[2px] px-2"
                        >
                          {subCategory}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="border rounded-md space-y-2 bg-muted/50 p-4">
                  <div className="flex items-center gap-2">
                    <MessageSquareDashed
                      size={16}
                      className="text-muted-foreground"
                    />
                    <span className="text-sm text-muted-foreground">
                      Keluhan
                    </span>
                  </div>
                  <p className="text-sm text-foreground line-clamp-2">
                    {feedbackItem.description}
                  </p>
                </div>

                <div className="border border-[#FA9500] rounded-md space-y-3 bg-muted/50 p-4">
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Rating
                    </span>
                  </div>
                  {feedbackItem.hasReview ? (
                    <div className="grid grid-cols-2">
                      {!feedbackItem.rating && (
                        <span className="text-sm text-muted-foreground">-</span>
                      )}
                      {feedbackItem.rating?.csa && (
                        <div className="space-y-2">
                          <span className="text-sm text-foreground">CSA</span>
                          <div className="flex items-center gap-1">
                            {Array.from({
                              length: feedbackItem.rating.csa,
                            }).map((_, idx) => (
                              <Star
                                key={idx}
                                size={16}
                                color="#FA9500"
                                fill="#FA9500"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      {feedbackItem.rating?.konstruksi && (
                        <div className="space-y-2">
                          <span className="text-sm text-foreground">
                            Konstruksi
                          </span>
                          <div className="flex items-center gap-1">
                            {Array.from({
                              length: feedbackItem.rating.konstruksi,
                            }).map((_, idx) => (
                              <Star
                                key={idx}
                                size={16}
                                color="#FA9500"
                                fill="#FA9500"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Button className="h-10 w-full">
                      <MessageSquare size={16} /> Beri Rating & Ulasan
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
