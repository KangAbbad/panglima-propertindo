import { PlusSquare } from "lucide-react";

import { breadcrumbLinks } from "./libs/constants";

import { Button } from "@workspace/ui/components/button";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { DashboardBreadcrumb } from "@/layouts/DashboardLayout/Breadcrumb";

const LoadingPage = () => {
  return (
    <section className="space-y-5">
      <div className="flex items-start justify-between">
        <DashboardBreadcrumb links={breadcrumbLinks} />
        <Button disabled className="h-auto py-3 !px-8">
          <PlusSquare /> Buat Feedback
        </Button>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <h2 className="text-foreground text-lg font-semibold">
          Daftar Feedback
        </h2>
        <div className="flex gap-5 items-center">
          <Skeleton className="h-11 w-[180px] rounded-lg" />
          <Skeleton className="h-11 w-[180px] rounded-lg" />
          <Skeleton className="h-11 w-[180px] rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Card key={idx} className="gap-4 py-4">
            <CardHeader className="flex px-4">
              <Skeleton className="h-[180px] w-full rounded-lg" />
            </CardHeader>
            <CardContent className="space-y-4 px-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-40 rounded-md" />
                </div>
              </div>
              <Skeleton className="h-4 w-24 rounded-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LoadingPage;
