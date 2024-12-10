"use client";

import Image from "next/image";
import { Star } from 'lucide-react';
import { GitFork } from 'lucide-react';
import { Github, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useMotionValue } from "framer-motion";
import { g, ins } from "framer-motion/client";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  github: (props: IconProps) => <Github {...props} />,
  linkedin: (props: IconProps) => <Linkedin {...props} />,
  twitter: (props: IconProps) => <Twitter {...props} />,
  instagram: (props: IconProps) => <Instagram {...props} />,
  globe: (props: IconProps) => <Globe {...props} />,
};

const DATA = {
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/yashksaini-coder",
      icon: Icons.github,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yashksaini",
      icon: Icons.linkedin,
    },
    Twitter: {
      name: "Twitter",
      url: "https://x.com/EasycodesDev",
      icon: Icons.twitter,
    },
    Instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/yashksaini.codes/",
      icon: Icons.instagram,
    },
    Website: {
      name: "bento/yashksaini",
      url: "https://bento.me/yashksaini",
      icon: Icons.globe,
    },
  },
};

export default function Home() {
  const mouseX = useMotionValue(0);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/preview.png"
          alt="Next.js logo"
          width={360}
          height={76}
          priority
        />
        <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by forking {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              nextjs-shadcn-template
            </code>
          </li>
          <li>A starter template for <strong>NextJS</strong> project</li>
        </ul>

        <div className="flex gap-4 justify-center items-center sm:justify-start sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/yashksaini-coder/nextjs-shadcn-template/fork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitFork size={18} className="mr-2" />
            Fork it
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-end gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 sm:ml-auto"
            href="https://github.com/yashksaini-coder/nextjs-shadcn-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Star size={18} className="mr-2" />
            Star the Repo
          </a>
        </div>
      </main>

      <TooltipProvider>
        <Dock direction="middle">
          {Object.entries(DATA.social).map(([name, social]) => (
            <DockIcon
              key={name}
              mouseX={mouseX}
              distance={100}
              magnification={40}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
