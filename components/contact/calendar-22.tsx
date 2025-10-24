"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Calendar22Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (date: string) => void;
  minDate?: Date;
  id?: string;
  required?: boolean;
}

export function Calendar22({
  label = "Date",
  placeholder = "Select date",
  value,
  onChange,
  minDate,
  id = "date",
}: Calendar22Props) {
  const [open, setOpen] = React.useState(false);

  // Parse date string in local timezone to avoid timezone conversion issues
  const selectedDate = React.useMemo(() => {
    if (!value) return undefined;
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }, [value]);

  const handleSelect = (date: Date | undefined) => {
    if (date && onChange) {
      // Format date in local timezone to avoid timezone conversion issues
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      onChange(formattedDate);
    }
    setOpen(false);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-base text-foreground/60 mb-1.5">
        {label}
      </label>
      <div className="group relative">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              id={id}
              type="button"
              className="w-full bg-foreground/5 hover:bg-foreground/5 rounded-t-sm rounded-b-none border-b border-foreground/15 px-3 py-2.5 text-foreground focus:outline-none transition-colors duration-300 justify-between font-normal h-auto text-base"
            >
              <span className={selectedDate ? "" : "text-foreground/40"}>
                {selectedDate ? selectedDate.toLocaleDateString() : placeholder}
              </span>
              <ChevronDownIcon className="opacity-60 h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              captionLayout="dropdown"
              onSelect={handleSelect}
              disabled={(date) => (minDate ? date < minDate : false)}
              fromDate={minDate}
              classNames={{
                today:
                  "bg-accent/40 text-foreground rounded-md data-[selected=true]:rounded-none",
              }}
            />
          </PopoverContent>
        </Popover>
        <div className="absolute bottom-0 left-0 h-[1px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
}
