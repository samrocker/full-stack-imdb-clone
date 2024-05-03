import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/IMDB_LOGO.png";
import WatchlistIcon from "../../../public/watchlist-icon.png";
import UserIcon from "../../../public/user-icon.png";
import Vector from "../../../public/Vector.png";
import LightIcon from "../../../public/Light-Mode-theme-Icon.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MenuIcon from "./../../../public/menu-line.png";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1580px] m-auto relative">
        <section className="h-12 w-full flex-between absolute top z-40">
          <div className="flex-[1] flex items-center justify-start gap-3 px-3">
            <Image
              src={Logo}
              alt="Logo"
              height={50}
              width={50}
              className="object-cover rounded-sm"
            />
            <div className="lg:flex gap-5 hidden">
              <Link href="" className="text-sm text-white font-normal">
                Movies
              </Link>
              <Link href="" className="text-sm text-white font-normal">
                Tv shows
              </Link>
              <Link href="" className="text-sm text-white font-normal">
                Celebs
              </Link>
              <Link href="" className="text-sm text-white font-normal">
                Watch
              </Link>
              <Link href="" className="text-sm text-white font-normal">
                Awards
              </Link>
              <Link href="" className="text-sm text-white font-normal">
                Community
              </Link>
            </div>
          </div>
          <div className="flex-[1.2] hidden lg:flex items-center justify-start gap-5">
            <form action="" className="flex lg:w-full">
              <input
                type="text"
                placeholder="Search a movie or a series"
                className="flex-[1] items-center bg-black/35 py-2 px-5 justify-start rounded-lg"
              />
            </form>
            <Image src={WatchlistIcon} height={30} width={30} alt="icon" />
            <h1 className="text-sm text-white font-normal">Watchlist</h1>
            <Image src={UserIcon} height={30} width={30} alt="icon" />
            <h1 className="text-sm text-white font-normal">User</h1>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white flex-center gap-1 text-sm font-normal border-none px-2">
                EN
                <Image src={Vector} alt="vector" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/50 border-none">
                <DropdownMenuLabel className="text-white text-sm font-normal border-0">
                  Languages
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Spanish
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Chinese
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Arabic
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  French
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Russian
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Portuguese
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Swahili
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  German
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Image src={LightIcon} height={30} width={30} alt="icon" />
          </div>
          <div className="flex-[5] md:flex-[1] flex lg:hidden items-center justify-end gap-2 md:gap-5 px-3">
            <form action="" className="flex md:w-full">
              <input
                type="text"
                placeholder="Search a movie or a series"
                className="flex-[1] items-center bg-white/15 md:bg-black/35 py-1 px-3 md:px-5 justify-start rounded-md"
              />
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white flex-center gap-1 text-sm font-normal border-none px-2">
                EN
                <Image src={Vector} alt="vector" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/50 border-none">
                <DropdownMenuLabel className="text-white text-sm font-normal border-0">
                  Languages
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Spanish
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Chinese
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Arabic
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  French
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Russian
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Portuguese
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  Swahili
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white text-sm font-normal border-none">
                  German
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger>
                <Image src={MenuIcon} height={40} width={40} alt="MenuIcon" />
              </SheetTrigger>
              <SheetContent className="bg-transperant rounded-2xl" id="slider">
                <div className="h-screen w-full flex-col flex items-start justify-center gap-5">
                  <div className="flex gap-3 flex-col text-left">
                  <Link href="" className="text-2xl text-white font-normal">
                    Movies
                  </Link>
                  <Link href="" className="text-2xl text-white font-normal">
                    Tv shows
                  </Link>
                  <Link href="" className="text-2xl text-white font-normal">
                    Celebs
                  </Link>
                  <Link href="" className="text-2xl text-white font-normal">
                    Watch
                  </Link>
                  <Link href="" className="text-2xl text-white font-normal">
                    Awards
                  </Link>
                  <Link href="" className="text-2xl text-white font-normal">
                    Community
                  </Link>
                  </div>
                  <div className="flex-center gap-5">
                  <Image
                    src={WatchlistIcon}
                    height={30}
                    width={30}
                    alt="icon"
                  />
                  <h1 className="text-sm text-white font-normal">Watchlist</h1>
                  <Image src={UserIcon} height={30} width={30} alt="icon" />
                  <h1 className="text-sm text-white font-normal">User</h1>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
