"use client";
import { useState, useEffect } from "react";

export default function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const [mainMedia, setMainMedia] = useState<string>("");
    const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);

    useEffect(() => {
      params.then(setResolvedParams);
    }, [params]);

    if (!resolvedParams) {
      return <div>Loading...</div>;
    }

    return (
      <div className="w-full h-screen bg-black text-white flex justify-center items-center">
        My Post: {resolvedParams.slug}
        <div>Main Media: {mainMedia}</div>
      </div>
    );
  }