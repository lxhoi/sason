"use client";

import * as React from "react";

export type AILoadingStateVariant = "thinking" | "generating" | "searching";

export interface AILoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AILoadingStateVariant;
  message?: string;
  interactive?: boolean;
}

const variantLabel: Record<AILoadingStateVariant, string> = {
  thinking: "Thinking...",
  generating: "Generating...",
  searching: "Searching...",
};

export const AILoadingState = React.forwardRef<HTMLDivElement, AILoadingStateProps>(
  ({ className = "", variant = "thinking", message, interactive = false, ...rest }, ref) => {
    const [currentVariant, setCurrentVariant] = React.useState<AILoadingStateVariant>(variant);

    React.useEffect(() => {
      setCurrentVariant(variant);
    }, [variant]);

    const handleCycle = () => {
      if (!interactive) return;
      const variants: AILoadingStateVariant[] = ["thinking", "generating", "searching"];
      const nextIdx = (variants.indexOf(currentVariant) + 1) % variants.length;
      setCurrentVariant(variants[nextIdx]);
    };

    return (
      <div
        ref={ref}
        onClick={handleCycle}
        role="status"
        aria-live="polite"
        title={interactive ? "Click để chuyển đổi trạng thái AI" : undefined}
        className={`react-cupertino-ui-ai-loading-state variant-${currentVariant} ${
          interactive ? "cursor-pointer select-none hover:scale-105 active:scale-95" : ""
        } ${className}`}
        {...rest}
      >
        <div className="react-cupertino-ui-ai-loading-state__orb">
          <span />
          <span />
          <span />
        </div>
        <div className="react-cupertino-ui-ai-loading-state__text">
          <strong>{variantLabel[currentVariant]}</strong>
          {message && <span>{message}</span>}
        </div>
      </div>
    );
  }
);

AILoadingState.displayName = "AILoadingState";
