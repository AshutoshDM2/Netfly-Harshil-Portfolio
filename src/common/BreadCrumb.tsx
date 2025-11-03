import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadCrumbItem {
  href?: string;
  label: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
  className?: string;
}

const BreadCrumb = ({ items, className }: BreadCrumbProps) => {
  return (
    <nav className={cn("flex items-center gap-2 text-sm", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-stone-600 hover:text-stone-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-stone-600">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="text-stone-600">/</span>}
        </div>
      ))}
    </nav>
  );
};

export default BreadCrumb;
