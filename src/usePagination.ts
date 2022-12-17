import { useEffect, useState } from "react";

type Seed = (totalPages: number, rowStart: number) => void;

type OnChange = (_: any, page: number) => void;
type UsePagination = {
  count: number;
  page: number;
  seed: Seed;
  onChange: OnChange;
  rowStart: number;
};

const usePagination = (): UsePagination => {
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState(() => {
    const page = sessionStorage.getItem("page");
    if (page) return parseInt(page);
    return 1;
  });
  const [rowStart, setRowStart] = useState(1);
  const seed: Seed = (totalPages: number, rowStart: number = 1) => {
    setCount(totalPages);
    setRowStart(rowStart);
  };
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("page");
    };
  }, []);

  const onChange = (_: any, page: number) => {
    setPage(page);
    sessionStorage.setItem("page", page.toString());
  };

  return { count, page, seed, onChange, rowStart };
};

export default usePagination;
