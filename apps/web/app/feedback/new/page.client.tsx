"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  CheckCircle2,
  Eye,
  Loader2,
  MessagesSquare,
  PlusSquare,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { array, InferType, object, string } from "yup";

import { FeedbackTips } from "./components/FeedbackTips";
import { queryKey } from "./libs/constants";
import {
  createFeedback,
  CreateFeedbackPayload,
  getCategoryList,
  getSubCategoryList,
} from "./services/get";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@workspace/ui/components/select";
import { toast } from "@workspace/ui/components/sonner";
import { Textarea } from "@workspace/ui/components/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { DashboardBreadcrumb } from "@/layouts/DashboardLayout/Breadcrumb";
import { parseStringToNumber } from "@/utils/parseStringToNumber";
import { delayFor } from "@/utils/delayFor";

const formSchema = object({
  unit: string().required("Unit wajib diisi!").default(""),
  categoryId: string().required("Kategori wajib diisi!").default(""),
  subCategoryId: string().required("Sub kategori wajib diisi!").default(""),
  feedback: string().required("Feedback wajib diisi!").default(""),
  imageUrls: array(string()).nullable().default([]),
});
type FormSchemaType = InferType<typeof formSchema>;

const breadcrumbLinks = [
  {
    icon: <MessagesSquare size={16} />,
    label: "Feedback",
    href: "/feedback",
  },
  {
    icon: <PlusSquare size={16} />,
    label: "New",
    href: "/feedback/new",
  },
];

export default function FeedbackFormPage() {
  const router = useRouter();

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isImagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [selectedImagePreview, setSelectedImagePreview] = useState<
    string | null
  >(null);

  const form = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      unit: "",
      categoryId: "",
      subCategoryId: "",
      feedback: "",
      imageUrls: [],
    },
  });
  const watchCategoryId = form.watch().categoryId;

  const {
    data: feedbackCategoryList = [],
    isFetching: isFeedbackCategoryListLoading,
  } = useQuery({
    queryKey: [queryKey.FEEDBACK_CATEGORY_LIST],
    queryFn: getCategoryList,
  });

  const {
    data: feedbackSubCategoryList = [],
    isFetching: isFeedbackSubCategoryListLoading,
  } = useQuery({
    queryKey: [
      queryKey.FEEDBACK_SUBCATEGORY_LIST,
      { categoryId: watchCategoryId },
    ],
    queryFn: () => {
      return getSubCategoryList({
        id_category: parseStringToNumber(watchCategoryId),
      });
    },
    enabled: !!watchCategoryId,
  });

  const { mutate, isPending: isSubmitLoading } = useMutation({
    mutationFn: createFeedback,
    onSuccess: async (res) => {
      console.log({ res });
      toast("Berhasil membuat feedback baru!", {
        icon: <CheckCircle2 size={20} fill="#287C3E" color="#FFFFFF" />,
        descriptionClassName: "text-secondary",
      });
      await delayFor(1500);
      router.push("/feedback");
    },
  });

  async function onImageChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files) return [];
    const fileArray = Array.from(files);

    const base64Promises = fileArray.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
    );
    const previews = await Promise.all(base64Promises);
    return previews;
  }

  function onSubmit(data: InferType<typeof formSchema>) {
    const payload: CreateFeedbackPayload = {
      unit: data.unit,
      id_category: parseStringToNumber(data.categoryId) ?? 0,
      id_sub_category: parseStringToNumber(data.subCategoryId) ?? 0,
      keluhan: data.feedback,
    };
    mutate(payload);
  }

  return (
    <section className="space-y-5">
      <div className="flex">
        <DashboardBreadcrumb links={breadcrumbLinks} />
      </div>
      <div className="rounded-lg bg-white p-8">
        <h2 className="text-foreground text-lg font-semibold">Buat Feedback</h2>
        <div className="space-y-3 mt-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Unit{" "}
                      <span className="border rounded-full text-xs bg-muted/50 pt-[2px] pb-1 px-2">
                        Wajib
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Isikan unit" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Kategori{" "}
                      <span className="border rounded-full text-xs bg-muted/50 pt-[2px] pb-1 px-2">
                        Wajib
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(e) => {
                          form.resetField("subCategoryId");
                          field.onChange(e);
                        }}
                      >
                        <SelectTrigger className="justify-start w-full">
                          {isFeedbackCategoryListLoading && (
                            <Loader2 className="animate-spin" />
                          )}
                          <div className="mr-auto">
                            <SelectValue placeholder="Pilih kategori" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {feedbackCategoryList.map(
                            (categoryItem, categoryIdx) => (
                              <SelectItem
                                key={`${categoryItem.id}-${categoryIdx}`}
                                value={`${categoryItem.id}`}
                              >
                                {categoryItem.name}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subCategoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Sub-Kategori{" "}
                      <span className="border rounded-full text-xs bg-muted/50 pt-[2px] pb-1 px-2">
                        Wajib
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="justify-start w-full">
                          {isFeedbackSubCategoryListLoading && (
                            <Loader2 className="animate-spin" />
                          )}
                          <div className="mr-auto">
                            <SelectValue placeholder="Pilih sub-kategori" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {feedbackSubCategoryList.map(
                            (subCategoryItem, subCategoryIdx) => (
                              <SelectItem
                                key={`${subCategoryItem.id}-${subCategoryIdx}`}
                                value={`${subCategoryItem.id}`}
                              >
                                {subCategoryItem.name}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FeedbackTips />
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Feedback{" "}
                      <span className="border rounded-full text-xs bg-muted/50 pt-[2px] pb-1 px-2">
                        Wajib
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        placeholder="Tuliskan feedback Anda"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrls"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Gambar <span className="text-gray-400">(Opsional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        multiple
                        className="w-1/3 pt-2 px-3"
                        onChange={async (e) => {
                          const previews = await onImageChange(e);
                          setImagePreviews(previews ?? []);
                          field.onChange?.(previews ?? []);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                    {imagePreviews.length > 0 && (
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {imagePreviews.map((src, idx) => (
                          <Button
                            key={idx}
                            variant="ghost"
                            className="relative group !px-0 w-20 h-20"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedImagePreview(src);
                              setImagePreviewVisible(true);
                            }}
                          >
                            <Image
                              src={src}
                              alt={`Feedback Preview ${idx + 1}`}
                              width={80}
                              height={80}
                              className="w-20 h-20 object-cover rounded border cursor-pointer"
                              unoptimized
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded">
                              <Eye size={20} className="text-white" />
                            </span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitLoading}
                className="h-10 w-24"
              >
                {isSubmitLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Simpan"
                )}
              </Button>
            </form>
          </Form>
          <Dialog
            open={isImagePreviewVisible}
            onOpenChange={setImagePreviewVisible}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Image Preview</DialogTitle>
              </DialogHeader>
              {selectedImagePreview ? (
                <div className="flex items-center justify-center">
                  <Image
                    src={selectedImagePreview}
                    alt="Feedback Image Preview"
                    width={400}
                    height={400}
                    unoptimized
                    className="max-w-full max-h-[80vh] object-contain rounded"
                  />
                </div>
              ) : (
                <h5 className="text-base text-foreground text-center">
                  Selected Image is not available
                </h5>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
