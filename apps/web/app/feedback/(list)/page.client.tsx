"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2, MessageSquare, PlusSquare, Search } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { FeedbackItem } from "./components/FeedbackItem";
import {
  breadcrumbLinks,
  feedbackImagesLocalStorageKey,
  feedbackNumbers,
  queryKey,
  statusOptionList,
} from "./libs/constants";
import { getCategoryList, getList } from "./services/get";

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
import { staticImportToBase64 } from "@/utils/staticImportToBase64";
import { parseStringToNumber } from "@/utils/parseStringToNumber";
import { debounce } from "lodash-es";

export default function FeedbackListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const statusSearchParam = (searchParams.get("status") as string) ?? undefined;
  const unitSearchParam = (searchParams.get("unit") as string) ?? undefined;
  const keywordSearchParam =
    (searchParams.get("keyword") as string) ?? undefined;

  const [feedbackImageUrl, setFeedbackImageUrl] = useState<string>("");
  const [feedbackImageUrls, setFeedbackImageUrls] = useState<{
    [key: string]: string[];
  }>({});

  const {
    data: feedbackCategoryList = [],
    isFetching: isFeedbackCategoryListLoading,
  } = useQuery({
    queryKey: [queryKey.FEEDBACK_CATEGORY_LIST],
    queryFn: getCategoryList,
  });

  const { data: feedbackList = [] } = useQuery({
    queryKey: [queryKey.FEEDBACK_LIST],
    queryFn: getList,
    select: (data) => {
      if (!unitSearchParam && !statusSearchParam) return data;
      const findUnit = feedbackCategoryList.find(
        (categoryItem) =>
          categoryItem.id === parseStringToNumber(unitSearchParam)
      );
      return data?.filter(
        (feedbackItem) =>
          (!statusSearchParam || feedbackItem.status === statusSearchParam) &&
          (!unitSearchParam || feedbackItem.category === findUnit?.name) &&
          (!keywordSearchParam ||
            feedbackItem.keluhan
              ?.toLowerCase()
              .includes(keywordSearchParam.toLowerCase()))
      );
    },
  });

  const filterSearch = useMemo(
    () =>
      debounce((params: URLSearchParams) => {
        router.replace(`/feedback?${params.toString()}`);
      }, 350),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFilterChange = useCallback(
    (filterType: "unit" | "status" | "keyword", value: string) => {
      const currentParams = new URLSearchParams(searchParams.toString());
      if (value) {
        currentParams.set(filterType, value);
      } else {
        currentParams.delete(filterType);
      }
      filterSearch(currentParams);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  );

  useEffect(() => {
    async function getImageUrl() {
      const imageUrl = await staticImportToBase64(FeedbackImage1);
      setFeedbackImageUrl(imageUrl);
    }
    getImageUrl();

    const existingImagesString = localStorage.getItem(
      feedbackImagesLocalStorageKey
    );
    if (existingImagesString) {
      const existingImages = JSON.parse(existingImagesString);
      setFeedbackImageUrls(existingImages);
    }
  }, []);

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
          <Select
            value={unitSearchParam}
            onValueChange={(value) => {
              handleFilterChange("unit", value);
            }}
          >
            <SelectTrigger className="bg-white !h-11 w-[180px]">
              {isFeedbackCategoryListLoading && (
                <Loader2 className="animate-spin" />
              )}
              <div className="line-clamp-1 mr-auto">
                <SelectValue placeholder="Unit" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {feedbackCategoryList.map((categoryItem, categoryItemIdx) => (
                <SelectItem
                  key={`${categoryItem.name}-${categoryItemIdx}`}
                  value={`${categoryItem.id}`}
                >
                  {categoryItem.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={statusSearchParam}
            onValueChange={(value) => {
              handleFilterChange("status", value);
            }}
          >
            <SelectTrigger className="bg-white !h-11 w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptionList.map((statusOption, statusIdx) => (
                <SelectItem
                  key={`${statusOption.label}-${statusIdx}`}
                  value={`${statusOption.value}`}
                >
                  {statusOption.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <InputRoot>
            <InputIcon className="text-muted-foreground size-4 h-7 [&~input]:pl-9">
              <Search />
            </InputIcon>
            <Input
              placeholder="Cari no. Tiket"
              defaultValue={keywordSearchParam}
              className="bg-white outline-primary !h-11 w-[180px]"
              onChange={(e) => {
                handleFilterChange("keyword", e.target.value);
              }}
            />
          </InputRoot>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {feedbackList.map((feedbackItem, feedbackIdx) => {
          // Demo purpose only
          const id = `A12-75-111124${feedbackItem.id}`;
          const subCategories = [
            feedbackItem?.sub_category ?? "",
            "Drainase Lingkungan",
            "Lingkungan",
          ];
          const rating = feedbackIdx !== 1 ? { csa: 5, konstruksi: 5 } : null;
          const hasReview = feedbackIdx !== 0 && !!feedbackItem.keluhan;
          const imageUrls = feedbackImageUrls[feedbackItem.id] ?? [];
          const imageUrl = imageUrls?.length ? imageUrls[0] : feedbackImageUrl;

          return (
            <FeedbackItem
              key={`${feedbackItem.id}-${feedbackIdx}`}
              id={id}
              category={feedbackItem.category}
              subCategories={subCategories}
              date={feedbackItem.created_at}
              description={feedbackItem.keluhan}
              tag={feedbackItem.unit}
              status={feedbackItem.status}
              rating={rating}
              hasReview={hasReview}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </section>
  );
}
