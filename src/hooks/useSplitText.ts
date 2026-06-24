import { useMemo } from "react";

interface SplitItem {
  text: string;
  index: number;
}

type SplitMode = "chars" | "words" | "lines";

export function useSplitText(text: string, mode: SplitMode): SplitItem[] {
  return useMemo(() => {
    switch (mode) {
      case "chars":
        return text.split("").map((char, index) => ({ text: char, index }));
      case "words":
        return text.split(" ").map((word, index) => ({ text: word, index }));
      case "lines":
        return text.split("\n").map((line, index) => ({ text: line, index }));
    }
  }, [text, mode]);
}
