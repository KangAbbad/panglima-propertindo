"use client";

import { Eye, MessagesSquare, PlusSquare } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { array, InferType, object, string } from "yup";

import { FeedbackTips } from "./components/FeedbackTips";

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
import { Textarea } from "@workspace/ui/components/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { DashboardBreadcrumb } from "@/layouts/DashboardLayout/Breadcrumb";

const formSchema = object({
  unit: string().required().default(""),
  categoryId: string().required().default(""),
  subCategoryId: string().required().default(""),
  feedback: string().required().default(""),
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const categorySchema = object({
  label: string().required().default(""),
  value: string().required().default(""),
});
type CategorySchemaType = InferType<typeof categorySchema>;

const categoryList: CategorySchemaType[] = [
  {
    label: "Unit Bangunan/Kavling",
    value: "1",
  },
  {
    label: "Fasilitas Umum & Lingkungan",
    value: "2",
  },
  {
    label: "Pembayaran",
    value: "3",
  },
  {
    label: "Legal & Akad",
    value: "4",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const subCategorySchema = object({
  label: string().required().default(""),
  value: string().required().default(""),
  categoryId: string().required().default(""),
});
type SubCategorySchemaType = InferType<typeof subCategorySchema>;
const subCategoryList: SubCategorySchemaType[] = [
  {
    label: "Dinding",
    value: "1",
    categoryId: "1",
  },
  {
    label: "Kusen, Pintu & Kaca",
    value: "2",
    categoryId: "1",
  },
  {
    label: "Lantai & Halaman",
    value: "3",
    categoryId: "1",
  },
  {
    label: "Drainase",
    value: "4",
    categoryId: "1",
  },
  {
    label: "Kelistrikan",
    value: "5",
    categoryId: "1",
  },
  {
    label: "Proses Bangun",
    value: "6",
    categoryId: "1",
  },
];

export default function FeedbackFormPage() {
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

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  function onSubmit(data: InferType<typeof formSchema>) {
    console.log({ data });
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
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          {categoryList.map((categoryItem, categoryIdx) => (
                            <SelectItem
                              key={`${categoryItem.label}-${categoryIdx}`}
                              value={categoryItem.value}
                            >
                              {categoryItem.label}
                            </SelectItem>
                          ))}
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
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih sub-kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          {subCategoryList.map(
                            (subCategoryItem, subCategoryIdx) => (
                              <SelectItem
                                key={`${subCategoryItem.label}-${subCategoryIdx}`}
                                value={subCategoryItem.value}
                              >
                                {subCategoryItem.label}
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
                        placeholder="Isikan feedback"
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
                          const previews = await handleImageChange(e);
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
              <Button type="submit" className="h-10 w-24">
                Simpan
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
