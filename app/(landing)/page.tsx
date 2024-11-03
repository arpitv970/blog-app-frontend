import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { ShinyButton } from "@/components/shared/shiny-button";
import { H1 } from "@/components/shared/typography/headers";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const LandingHomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <MaxWidthWrapper>
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <H1>
                <span>Insights that fuel curiosity,</span>
                <br />
                <span className="relative bg-gradient-to-r from-violet-600 to-violet-900 text-transparent bg-clip-text">
                  Discover more today.
                </span>
              </H1>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              From hands-on tutorials to deep dives into the latest tech trends,
              our blog is a hub for{" "}
              <span className="text-gray-700 font-semibold">
                developers, engineers, and tech enthusiasts
              </span>{" "}
              alike. Follow expert insights, share your own journey, and connect
              with community.
            </p>
            <ul className="space-y-2 text-base/7 text-gray-600 flex flex-col items-start">
              {[
                "Blogs on the latest trends, tools, and best practices.",
                "Explore, and learn from real people in tech.",
                "Showcase all your published blogs and let other know your expertise.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-1.5 items-center text-left">
                  <CheckIcon className="text-violet-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <ShinyButton>Get Started</ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Demo Screen / Video / Graphics */}
      <section>
        <MaxWidthWrapper>Demo Screen</MaxWidthWrapper>
      </section>
    </>
  );
};

export default LandingHomePage;
