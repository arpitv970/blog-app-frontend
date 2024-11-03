import { BrandLogo } from "@/components/shared/brand-logo";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="">
      <MaxWidthWrapper className="flex justify-between items-center py-3 bg-background/10">
        {/* Brand Logo */}
        <BrandLogo />

        {/* Navigation */}
        <div className="space-x-3">
          <Button variant={"ghost"}>Home</Button>
          <Button variant={"ghost"}>About</Button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
