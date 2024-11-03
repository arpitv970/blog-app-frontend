import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface IUnderDevelopmen {
  children?: React.ReactNode;
  className?: string;
}
export const UnderDevelopment: React.FC<IUnderDevelopmen> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("", className)}>
      <p className="text-4xl font-black font-serif tracking-tighter">
        🚧 Under Development
      </p>
      {children ? (
        <div className="my-3">
          <Separator />
          <div className="my-3 tracking-wide font-mono text-center mx-auto">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};
