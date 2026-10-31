"use client";

import {
  type DragEvent,
  type UIEvent,
  useDeferredValue,
  useMemo,
  useRef,
  useState
} from "react";

import { readFile } from "@/lib/files";
import { cn } from "@/lib/utils";

/**
 * A lightweight code surface: a monospace textarea with a line-number gutter,
 * no wrapping, and drag-and-drop file loading. Read-only when no `onChange`.
 */
export function CodeEditor({
  value,
  onChange,
  placeholder,
  label,
  className,
  autoFocus
}: {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Accessible name for the textarea. */
  label: string;
  className?: string;
  autoFocus?: boolean;
}) {
  const gutterRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  // Line numbers can lag a keystroke behind; typing stays instant on huge input.
  const deferredValue = useDeferredValue(value);
  const lineNumbers = useMemo(() => {
    const count = deferredValue ? deferredValue.split("\n").length : 1;
    return Array.from({ length: count }, (_, index) => index + 1).join("\n");
  }, [deferredValue]);

  const syncGutter = (event: UIEvent<HTMLTextAreaElement>) => {
    if (gutterRef.current) {
      gutterRef.current.scrollTop = event.currentTarget.scrollTop;
    }
  };

  const handleDragOver = (event: DragEvent) => {
    if (!onChange) {
      return;
    }
    event.preventDefault();
    setDragging(true);
  };

  const handleDrop = async (event: DragEvent) => {
    if (!onChange) {
      return;
    }
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onChange(await readFile(file));
    }
  };

  return (
    <div
      className={cn(
        "relative flex min-h-0 flex-1 font-mono text-[13px] leading-5",
        dragging && "ring-2 ring-primary ring-inset",
        className
      )}
    >
      <div
        ref={gutterRef}
        aria-hidden
        className="w-11 shrink-0 overflow-hidden border-r bg-gutter py-2.5 pr-2.5 text-right whitespace-pre text-muted-foreground/60 select-none"
      >
        {lineNumbers}
      </div>
      <textarea
        aria-label={label}
        className="min-h-0 flex-1 resize-none scrollbar-thin overflow-auto bg-transparent px-3 py-2.5 whitespace-pre outline-none placeholder:text-muted-foreground/70"
        value={value}
        placeholder={placeholder}
        readOnly={!onChange}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        autoFocus={autoFocus}
        wrap="off"
        onChange={onChange && ((event) => onChange(event.target.value))}
        onScroll={syncGutter}
        onDragOver={handleDragOver}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      />
      {dragging && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary/5 text-sm font-medium text-primary">
          Drop file to load
        </div>
      )}
    </div>
  );
}
