"use client";

import { useQuery } from "@tanstack/react-query";
import { MessageSquare, PlusSquare, Search } from "lucide-react";
import Link from "next/link";

import { FeedbackItem } from "./components/FeedbackItem";
import {
  breadcrumbLinks,
  feedbackNumbers,
  queryKey,
  statusOptionList,
  statusOptionsObj,
  unitOptions,
} from "./libs/constants";
import { getList } from "./services/get";

import { Button, buttonVariants } from "@workspace/ui/components/button";
import { Input, InputIcon, InputRoot } from "@workspace/ui/components/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@workspace/ui/components/select";
import ChatBubbleLeftRightIcon from "@/assets/icons/chat-bubble-left-right-icon.svg";
import FeedbackImage1 from "@/assets/images/feedback-image-1.jpg";
import { DashboardBreadcrumb } from "@/layouts/DashboardLayout/Breadcrumb";

export default function FeedbackListPage() {
  const { data: dataSource = [] } = useQuery({
    queryKey: [queryKey.FEEDBACK_LIST],
    queryFn: getList,
  });

  return (
    <section className="space-y-5">
      <div className="flex items-start justify-between">
        <DashboardBreadcrumb links={breadcrumbLinks} />
        <Link
          href="/feedback/new"
          className={buttonVariants({ className: "h-auto py-3 !px-8" })}
        >
          <PlusSquare /> Buat Feedback
        </Link>
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
              {statusOptionList.map((statusOption, statusIdx) => (
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
        {dataSource.map((feedbackItem, feedbackIdx) => {
          // Demo purpose only
          const id = `A12-75-111124${feedbackItem.id}`;
          const subCategories = [
            feedbackItem.sub_category,
            "Drainase Lingkungan",
            "Lingkungan",
          ];
          const rating = feedbackIdx !== 1 ? { csa: 5, konstruksi: 5 } : null;
          const hasReview = feedbackIdx !== 0 && !!feedbackItem.keluhan;

          return (
            <FeedbackItem
              key={`${feedbackItem.id}-${feedbackIdx}`}
              id={id}
              category={feedbackItem.category}
              subCategories={subCategories}
              date={feedbackItem.created_at}
              description={feedbackItem.keluhan}
              tag={feedbackItem.unit}
              status={statusOptionsObj[feedbackItem.status]?.value ?? 0}
              rating={rating}
              hasReview={hasReview}
              imageUrl={FeedbackImage1}
            />
          );
        })}
      </div>
    </section>
  );
}
