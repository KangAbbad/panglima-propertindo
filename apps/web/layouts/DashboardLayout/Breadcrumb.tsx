import { House } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Fragment, ReactNode } from "react";
import { cn } from "@workspace/ui/lib/utils";

type Props = {
  links: {
    icon?: ReactNode;
    label: string;
    href: string;
  }[];
};

export function DashboardBreadcrumb(props: Props) {
  const { links } = props;

  return (
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
        {links.map((linkItem, linkIdx) => {
          const isLastItem = linkIdx === links.length - 1;

          return (
            <Fragment key={`${linkItem.label}-${linkIdx}`}>
              <BreadcrumbItem className={cn(!isLastItem && "hidden md:block")}>
                <BreadcrumbLink
                  href={linkItem.href}
                  className="flex items-center gap-2 text-foreground"
                >
                  {linkItem.icon} {linkItem.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {!isLastItem && (
                <BreadcrumbSeparator className="hidden md:block text-foreground">
                  /
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
