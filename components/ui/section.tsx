import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export function Section({ children, className, containerClassName, ...props }: SectionProps) {
  return (
    <section 
      className={cn("py-20 sm:py-32 bg-background", className)} 
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto px-5 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
