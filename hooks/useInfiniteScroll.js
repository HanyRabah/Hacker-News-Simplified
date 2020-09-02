import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants";
import debounce from "@/utils/debounce";

const isBrowser = () => typeof window !== "undefined";

const useScrollLoading = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll =  debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setLoading(true);
  }, 300)

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return { count, loading };
  
};
export default useScrollLoading;
