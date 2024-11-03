import { UnderDevelopment } from "@/components/shared/fallback/under-development";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

interface IDemoScreen {
  className?: string;
}
export const DemoScreen: React.FC<IDemoScreen> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex min-h-[800px] w-full max-w-[1200px] rounded-lg overflow-hidden bg-[#36393f] text-secondary",
        className,
      )}
    >
      <div className="h-full w-full flex justify-center items-center m-auto text-center">
        <UnderDevelopment>
          Meanwhile Please checkout our{" "}
          <Link target="_blank" href={"https://github.com/arpitv970/blog-app"}>
            <Button
              variant={"default"}
              className="bg-gradient-to-bl from-violet-600 to-violet-900 drop-shadow-lg transition-all duration-300 ease-linear hover:drop-shadow-2xl"
            >
              <GithubIcon className="size-5" />
              <Separator orientation="vertical" />
              GitHub Repo
            </Button>
          </Link>
        </UnderDevelopment>
      </div>
    </div>
  );
};
