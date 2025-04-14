"use client";

import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselDotButton,
  CarouselItem,
} from "@workspace/ui/components/carousel";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import avatar1 from "@/assets/images/avatar-1.jpg";
import avatar2 from "@/assets/images/avatar-2.jpg";
import avatar3 from "@/assets/images/avatar-3.jpg";

type TestimoniItem = {
  avatar: StaticImageData;
  name: string;
  star: number;
  testimonial: string;
};

const testimonials: TestimoniItem[] = [
  {
    avatar: avatar1,
    name: "Ujang Gunawan",
    star: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.",
  },
  {
    avatar: avatar2,
    name: "Dedik Dryfan",
    star: 5,
    testimonial:
      "Sed non sed ultricies ultricies iaculis turpis ut tincidunt orci. Ipsum id nullam urna et vehicula. Volutpat dignissim eget in velit. Integer mattis egestas neque amet. Turpis purus donec id velit sed morbi ultrices nulla praesent. Elit ipsum proin viverra sollicitudin vel arcu a.",
  },
  {
    avatar: avatar3,
    name: "Putra Dadang Heriawan",
    star: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. In ornare aliquam imperdiet dolor porta enim justo. Sed non sed ultricies ultricies iaculis turpis ut tincidunt orci. Ipsum id nullam urna et vehicula. Volutpat dignissim eget in velit. Integer mattis egestas neque amet. Turpis purus donec id velit sed morbi ultrices nulla praesent. Elit ipsum proin viverra sollicitudin vel arcu a.",
  },
  {
    avatar: avatar1,
    name: "Ujang Gunawan 2",
    star: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.",
  },
  {
    avatar: avatar2,
    name: "Dedik Dryfan 2",
    star: 5,
    testimonial:
      "Sed non sed ultricies ultricies iaculis turpis ut tincidunt orci. Ipsum id nullam urna et vehicula. Volutpat dignissim eget in velit. Integer mattis egestas neque amet. Turpis purus donec id velit sed morbi ultrices nulla praesent. Elit ipsum proin viverra sollicitudin vel arcu a.",
  },
  {
    avatar: avatar3,
    name: "Putra Dadang Heriawan 2",
    star: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. In ornare aliquam imperdiet dolor porta enim justo. Sed non sed ultricies ultricies iaculis turpis ut tincidunt orci. Ipsum id nullam urna et vehicula. Volutpat dignissim eget in velit. Integer mattis egestas neque amet. Turpis purus donec id velit sed morbi ultrices nulla praesent. Elit ipsum proin viverra sollicitudin vel arcu a.",
  },
  {
    avatar: avatar1,
    name: "Ujang Gunawan 3",
    star: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.",
  },
  {
    avatar: avatar2,
    name: "Dedik Dryfan 3",
    star: 5,
    testimonial:
      "Sed non sed ultricies ultricies iaculis turpis ut tincidunt orci. Ipsum id nullam urna et vehicula. Volutpat dignissim eget in velit. Integer mattis egestas neque amet. Turpis purus donec id velit sed morbi ultrices nulla praesent. Elit ipsum proin viverra sollicitudin vel arcu a.",
  },
  {
    avatar: avatar3,
    name: "Putra Dadang Heriawan 3",
    star: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. In ornare aliquam imperdiet dolor porta enim justo. Sed non sed ultricies ultricies iaculis turpis ut tincidunt orci. Ipsum id nullam urna et vehicula. Volutpat dignissim eget in velit. Integer mattis egestas neque amet. Turpis purus donec id velit sed morbi ultrices nulla praesent. Elit ipsum proin viverra sollicitudin vel arcu a.",
  },
];

export function Testimonial() {
  const [dotActiveNumber, setDotActiveNumber] = useState<number>(0);
  const [showPerSlide, setShowPerSlide] = useState<number>(1);
  const dotCount: number = Math.ceil(testimonials.length / showPerSlide);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setShowPerSlide(3);
      else setShowPerSlide(1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-secondary/80 py-10 px-4 md:py-14 md:px-0">
      <div className="container mx-auto">
        <h1 className="text-foreground text-2xl font-semibold">
          Ulasan dari Konsumen
        </h1>
        <div className="mt-8">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimoniItem, testimoniIdx) => (
                <CarouselItem
                  key={`${testimoniItem.name}-${testimoniIdx}`}
                  className="md:basis-1/3"
                >
                  <Card className="shadow-none min-h-[344px]">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden">
                          <Image
                            src={testimoniItem.avatar}
                            alt={testimoniItem.name}
                            height={56}
                            width={56}
                          />
                        </div>
                        <span className="text-lg text-foreground font-semibold">
                          {testimoniItem.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-6">
                        {Array.from({ length: testimoniItem.star }).map(
                          (_, idx) => (
                            <Star
                              key={idx}
                              color="#FA9500"
                              fill="#FA9500"
                              size={16}
                            />
                          )
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-5">
                        {testimoniItem.testimonial}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {dotCount > 0 && (
              <div className="flex items-center justify-center gap-5 mt-12">
                {Array.from({ length: dotCount }).map((_, idx) => (
                  <CarouselDotButton
                    key={idx}
                    number={idx}
                    showPerSlide={showPerSlide}
                    isActive={dotActiveNumber === idx * showPerSlide}
                    onSelectDot={(number) => setDotActiveNumber(number)}
                  />
                ))}
              </div>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
