"use client";

import dayjs from "dayjs";
import {
  ImageIcon,
  ImageOff,
  RefreshCcw,
  Check,
  CalendarDays,
  LayoutGrid,
  LayoutList,
  MessageSquareDashed,
  Star,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { object, string, number, array, boolean, InferType } from "yup";

import { Button } from "@workspace/ui/components/button";
import { Card, CardHeader, CardContent } from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { feedbackDetailStore } from "../libs/state";
import { statusOptionList } from "../libs/constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FeedbackItemSchema = object({
  id: string().required(),
  imageUrl: string().nullable(),
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
export type FeedbackItemType = InferType<typeof FeedbackItemSchema>;

export function FeedbackItem(props: FeedbackItemType) {
  const {
    id,
    category,
    date,
    description,
    hasReview,
    imageUrl,
    rating,
    subCategories,
    status,
    tag,
  } = props;
  const { setData: setFeedbackDetailState } = feedbackDetailStore();

  const isStatusProgress = status === 1 || status === 3 || status === 4;
  const isStatusComplete = status === 2;
  const findStatus = statusOptionList.find(
    (statusOption) => statusOption.id === status
  );
  const statusLabel = findStatus?.name ?? "-";
  const countRestOfSubCategories =
    subCategories.length > 2 ? subCategories.length - 2 : 0;
  const formattedDate = dayjs(date).format("DD MMMM YYYY, HH:mm");

  const prefetchFeedbackDetail = () => {
    setFeedbackDetailState(props);
  };

  return (
    <Link href={`/feedback/${id}`} onClick={prefetchFeedbackDetail}>
      <Card className="gap-4 h-full py-4">
        <CardHeader className="flex px-4">
          {imageUrl ? (
            <div className="relative flex-1 rounded-lg overflow-hidden h-[180px]">
              <Image src={imageUrl} alt={id} fill className="object-cover" />
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
        <CardContent className="flex flex-col gap-4 h-full px-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-base text-foreground font-bold">{id}</h3>
              <div className="border border-primary bg-primary/10 rounded-full inline-block pb-[2px] px-[10px]">
                <span className="text-primary text-xs font-medium">{tag}</span>
              </div>
            </div>
            <div className="border bg-muted rounded-full flex py-[2px] px-[10px]">
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

          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-muted-foreground" />
            <span className="text-sm text-secondary-foreground">
              {formattedDate}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LayoutGrid size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Kategori</span>
            </div>
            <span className="text-sm text-foreground font-medium">
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
              {subCategories.slice(0, 2).map((subCategory, subCategoryIdx) => (
                <span
                  key={`${subCategory}-${subCategoryIdx}`}
                  className="border rounded-md text-sm text-foreground font-medium py-[2px] px-2"
                >
                  {subCategory}
                </span>
              ))}
              {countRestOfSubCategories > 0 && (
                <span className="border rounded-md text-sm text-foreground font-medium py-[2px] px-2">
                  +{countRestOfSubCategories}
                </span>
              )}
            </div>
          </div>

          <div className="border rounded-md space-y-2 bg-muted/50 p-4 mt-auto">
            <div className="flex items-center gap-2">
              <MessageSquareDashed
                size={16}
                className="text-muted-foreground"
              />
              <span className="text-sm text-muted-foreground">Keluhan</span>
            </div>
            <p className="text-sm text-foreground line-clamp-2">
              {description}
            </p>
          </div>

          <div className="border border-[#FA9500] rounded-md space-y-3 bg-muted/50 min-h-[106px] p-4">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Rating</span>
            </div>
            {hasReview ? (
              <div className="grid grid-cols-3">
                {!rating && (
                  <span className="text-sm text-muted-foreground">-</span>
                )}
                {rating?.csa && (
                  <>
                    <div className="space-y-2">
                      <span className="text-sm text-foreground">CSA</span>
                      <div className="flex items-center gap-1">
                        {Array.from({
                          length: rating?.csa ?? 0,
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
                        length: rating?.konstruksi ?? 0,
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
    </Link>
  );
}
