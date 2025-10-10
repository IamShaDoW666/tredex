"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Motion, spring } from "react-motion";
import { useScroll } from "@/context/ScrollContext";

export function FloatingSearchIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
    const searchRef = useRef<HTMLInputElement>(null);
  const { collectionsGridRef } = useScroll();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    if (term && collectionsGridRef?.current) {
      collectionsGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);

    useEffect(() => {
        if (isOpen && searchRef.current) {
            searchRef.current.focus();
        }
    }, [isOpen]);

  return (
    <div
      className={`fixed z-50 md:hidden ${
        isOpen
          ? "bottom-[45vh] left-1/2 -translate-x-1/2"
          : "bottom-10 right-1/2 translate-x-1/2"
      }`}
    >
      <Motion
        style={{
          width: spring(isOpen ? 300 : 56),
          height: spring(isOpen ? 56 : 56),
        }}
      >
        {({ width, height }) => (
          <div
            style={{ width, height }}
            className="relative flex items-center"
          >
            {isOpen && (
              <Input
                ref={searchRef}
                type="search"
                placeholder="Search products..."
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("search")?.toString()}
                className="h-14 w-full bg-secondary/75 pr-14 rounded-full"
              />
            )}
            <Button
              type="button"
              size="icon"
              onClick={() => {
                setIsOpen(!isOpen);
                }}
              className="absolute right-0 h-14 w-14 rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
            </Button>
          </div>
        )}
      </Motion>
    </div>
  );
}
