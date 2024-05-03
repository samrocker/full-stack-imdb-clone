"use client"

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Image1 from "../../../public/1.jpg";
import Image2 from "../../../public/2.jpg";
import Image3 from "../../../public/3.jpg";
import Image4 from "../../../public/4.jpg";
 

const Hero = () => {
  return (
    <div id="main" className="bg-black">
      <div className="max-w-[1580px] m-auto">
        <div className="h-screen w-full flex-center flex-col lg:flex-row">
          <div className="h-[30%] md:h-[50%] lg:h-full md:p-20 lg:p-1 flex-[0.5] lg:flex-[3] flex-center">
            <Carousel>
              <CarouselContent className="p-12 md:p-1 lg:p-1">
                <CarouselItem className="h-full w-full flex rounded-lg">
                  <Image
                    src={Image1}
                    alt="bg-1"
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="h-full w-full flex rounded-lg">
                  <Image
                    src={Image2}
                    alt="bg-2"
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="h-full w-full flex rounded-lg">
                  <Image
                    src={Image3}
                    alt="bg-3"
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="h-full w-full flex rounded-lg">
                  <Image
                    src={Image4}
                    alt="bg-4"
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div className="h-[70%] md:h-[50%] lg:h-full lg:flex-[1] flex-center flex-col">
            <div className="flex w-full items-center justify-start flex-row">
              <div className="flex-[1] flex gap-2 py-3 px-4 items-center justify-start">
                <span className="h-2 w-2 flex-center rounded-full bg-yellow-500"></span>
                <h1 className="text-white ">Featured videos</h1>
              </div>
              <div className="flex-[1] flex-center gap-1">
                <div className="bg-white/20 flex-center rounded-lg">
                  <h1 className="text-white/60 text-sm font-nromal py-1 px-5">Browse Trailer</h1>
                </div>
              </div>
            </div>
            <div className="flex-between gap-3 flex-col md:flex-row lg:flex-col">
              <div
                className="h-44 w-full flex-center py-5 px-2 gap-1 rounded-lg"
                id="card1"
              >
                <div
                  id="banner1"
                  className="h-full flex-[1] flex rounded-lg"
                ></div>
                <div className="flex-[3] flex px-3 flex-col gap-1">
                  <h1 className="text-md text-white font-medium">
                    Welcome to the Apocalypse!
                  </h1>
                  <p className="text-sm text-white font-medium">
                    Watch the new “Fallout” Trailer
                  </p>
                </div>
              </div>
              <div
                className="h-44 w-full flex-center py-5 px-2 gap-1 rounded-lg"
                id="card2"
              >
                <div
                  id="banner2"
                  className="h-full flex-[1] flex rounded-lg"
                ></div>
                <div className="flex-[3] flex px-3 flex-col gap-1">
                  <h1 className="text-md text-white font-medium text-center">
                    Inside Out 2’ Make us Feel Every Emotion
                  </h1>
                  <p className="text-sm text-center text-white font-medium">
                    Watch the new “Fallout” Trailer
                  </p>
                </div>
              </div>
              <div
                className="h-44 w-full flex-center py-5 px-2 gap-1 rounded-lg"
                id="card3"
              >
                <div
                  id="banner3"
                  className="h-full flex-[1] flex rounded-lg"
                ></div>
                <div className="flex-[3] flex px-3 flex-col gap-1">
                  <h1 className="text-md text-white font-medium">
                    Where Might ‘Dune’ Go Next?
                  </h1>
                  <p className="text-sm text-white font-medium">
                    Our ‘Dune: Part Three’ Theories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
