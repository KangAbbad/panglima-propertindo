"use client";

import {
  CalendarDays,
  Check,
  ChevronLeft,
  LayoutGrid,
  LayoutList,
  MessageSquare,
  MessageSquareDashed,
  MessagesSquare,
  MoreHorizontal,
  RefreshCcw,
  Star,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@workspace/ui/components/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";
import {
  BreadcrumbLinkItem,
  DashboardBreadcrumb,
} from "@/layouts/DashboardLayout/Breadcrumb";
import feedbackImage2 from "@/assets/images/feedback-image-2.jpg";
import feedbackImage3 from "@/assets/images/feedback-image-3.jpg";
import { feedbackDetailStore } from "../(list)/libs/state";
import { delayFor } from "@/utils/delayFor";
import dayjs from "dayjs";
import { statusOptionsObj } from "../(list)/libs/constants";

export default function FeedbackDetailPage() {
  const router = useRouter();
  const params = useParams();
  const feedbackId = params.id as string;
  const breadcrumbLinks: BreadcrumbLinkItem[] = [
    {
      icon: <MessagesSquare size={16} />,
      label: "Feedback",
      href: "/feedback",
    },
    {
      label: feedbackId,
      href: `/feedback/${feedbackId}`,
    },
  ];

  const { data: feedbackDetailState, resetData: resetFeedbackDetailState } =
    feedbackDetailStore();
  const {
    category,
    date,
    description,
    hasReview,
    rating,
    status,
    subCategories = [],
    tag,
    imageUrl,
  } = feedbackDetailState ?? {};

  const [feedbackImageApi, setFeedbackImageApi] = useState<CarouselApi>();
  const [feedbackThumbnailApi, setFeedbackThumbnailApi] =
    useState<CarouselApi>();
  const [currentThumb, setCurrentThumb] = useState(0);

  const feedback: string =
    "Keren banget pengerjaannya, membuat saya menangis melihat hasil pengerjaannya, semoga petugas yang menyelesaikannya menjadi petugas yang taat pada pemerintahan pak Praroro dan diberikan selalu rezeki seblak yang melimpah, uhuyy";
  const imageUrls: StaticImageData[] = [
    imageUrl as unknown as StaticImageData,
    feedbackImage2,
    feedbackImage3,
  ];
  const newDateFormat = dayjs(date).format("DD MMMM YYYY, HH:mm");
  const isStatusProgress =
    status === "pending" || status === "waiting" || status === "in_progress";
  const isStatusComplete = status === "resolved";
  const findStatus = statusOptionsObj[status ?? ""];
  const statusLabel = findStatus?.label ?? "-";

  const handleSelectThumb = (index: number) => {
    if (!feedbackImageApi || !feedbackThumbnailApi) {
      return;
    }
    feedbackThumbnailApi.scrollTo(index);
    feedbackImageApi.scrollTo(index);
    setCurrentThumb(index);
  };

  const handleBack = async () => {
    router.back();
    await delayFor(2000);
    resetFeedbackDetailState();
  };

  useEffect(() => {
    if (!feedbackImageApi || !feedbackThumbnailApi) {
      return;
    }

    const handleTopSelect = () => {
      const selected = feedbackImageApi.selectedScrollSnap();
      setCurrentThumb(selected);
      feedbackThumbnailApi.scrollTo(selected);
    };

    const handleBottomSelect = () => {
      const selected = feedbackThumbnailApi.selectedScrollSnap();
      setCurrentThumb(selected);
      feedbackImageApi.scrollTo(selected);
    };

    feedbackImageApi.on("select", handleTopSelect);
    feedbackThumbnailApi.on("select", handleBottomSelect);

    return () => {
      feedbackImageApi.off("select", handleTopSelect);
      feedbackThumbnailApi.off("select", handleBottomSelect);
    };
  }, [feedbackImageApi, feedbackThumbnailApi]);

  if (!feedbackDetailState) {
    return (
      <section className="space-y-5">
        <div className="flex items-start">
          <DashboardBreadcrumb links={breadcrumbLinks} />
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-primary rounded-md h-9 w-9"
            onClick={handleBack}
          >
            <ChevronLeft size={16} className="text-primary" />
          </Button>
          <h1 className="text-lg text-foreground font-semibold">
            Detail Feedback
          </h1>
        </div>
        <div className="rounded-lg flex items-center justify-center bg-white py-20">
          <h1 className="text-lg text-red-600 font-semibold">
            Data not available!
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-5">
      <div className="flex items-start">
        <DashboardBreadcrumb links={breadcrumbLinks} />
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="border-primary rounded-md h-9 w-9"
          onClick={handleBack}
        >
          <ChevronLeft size={16} className="text-primary" />
        </Button>
        <h1 className="text-lg text-foreground font-semibold">
          Detail Feedback
        </h1>
      </div>
      <div className="rounded-lg bg-white space-y-4 p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-lg text-foreground font-semibold">
            No. {feedbackId}
          </h1>
          <div className="border border-primary bg-primary/10 rounded-full inline-block pb-[2px] px-[10px]">
            <span className="text-primary text-xs font-medium">{tag}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="space-y-2 w-[280px]">
            <Carousel setApi={setFeedbackImageApi}>
              <CarouselContent>
                {imageUrls.map((imageUrl, imageUrlIdx) => (
                  <CarouselItem
                    key={imageUrlIdx}
                    className="hover:cursor-grab active:cursor-grabbing"
                  >
                    <div className="relative rounded-lg overflow-hidden h-[280px] w-[280px]">
                      <Image
                        src={imageUrl}
                        alt={`Preview feedback ${imageUrlIdx + 1}`}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel setApi={setFeedbackThumbnailApi}>
              <CarouselContent className="-ml-2">
                {imageUrls.map((imageUrl, imageUrlIdx) => (
                  <CarouselItem
                    key={imageUrlIdx}
                    className="basis-1/3 cursor-pointer pl-2"
                    onClick={() => handleSelectThumb(imageUrlIdx)}
                  >
                    <div
                      className={cn(
                        "relative rounded-lg overflow-hidden h-[88px] w-full",
                        currentThumb === imageUrlIdx &&
                          "border-3 border-primary"
                      )}
                    >
                      <Image
                        src={imageUrl}
                        alt={`Preview feedback ${imageUrlIdx + 1}`}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex-[1_1_0] space-y-5">
            <div className="grid grid-cols-2 gap-5 w-3/4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Tanggal Dibuat
                  </span>
                </div>
                <span className="text-sm text-secondary-foreground">
                  {newDateFormat}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MoreHorizontal size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Status</span>
                </div>
                <div className="border bg-muted rounded-full inline-flex py-[2px] px-[10px]">
                  {isStatusProgress && (
                    <div className="flex items-center gap-2">
                      <RefreshCcw size={16} color="#FA9500" />
                      <span className="text-[#FA9500] text-xs font-medium">
                        {statusLabel}
                      </span>
                    </div>
                  )}
                  {isStatusComplete && (
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-primary" />
                      <span className="text-primary text-xs font-medium">
                        {statusLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LayoutGrid size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Kategori
                  </span>
                </div>
                <span className="text-sm text-secondary-foreground">
                  {category}
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
                  {subCategories.map((subCategory, subCategoryIdx) => (
                    <span
                      key={`${subCategory}-${subCategoryIdx}`}
                      className="border rounded-md text-xs text-foreground font-medium py-[2px] px-2"
                    >
                      {subCategory}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="border rounded-md space-y-2 bg-muted/50 p-4">
              <div className="flex items-center gap-2">
                <MessageSquareDashed
                  size={16}
                  className="text-muted-foreground"
                />
                <span className="text-sm text-muted-foreground">Keluhan</span>
              </div>
              <p className="text-sm text-foreground">{description}</p>
            </div>
          </div>
        </div>
        <div className="border border-[#FA9500] rounded-md space-y-4 bg-muted/50 min-h-[106px] p-4">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Rating</span>
          </div>
          {hasReview ? (
            <div className="grid auto-cols-max grid-flow-col gap-5">
              {!rating && (
                <span className="text-sm text-muted-foreground">-</span>
              )}
              {rating?.csa && (
                <>
                  <div className="space-y-2">
                    <span className="text-sm text-foreground">CSA</span>
                    <div className="flex items-center gap-1">
                      {Array.from({
                        length: rating.csa,
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
                  <div className="flex items-center justify-center">
                    <Separator orientation="vertical" />
                  </div>
                </>
              )}
              {rating?.konstruksi && (
                <div className="space-y-2">
                  <span className="text-sm text-foreground">Konstruksi</span>
                  <div className="flex items-center gap-1">
                    {Array.from({
                      length: rating.konstruksi,
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
          {hasReview && (
            <>
              <Separator />
              <p className="text-sm text-foreground">{feedback}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
