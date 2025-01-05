"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef(null);

  // 화면이 준비되면, input 요소에 포커스!
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
