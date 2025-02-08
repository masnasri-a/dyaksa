"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Headers from "../app/common/header";
import axios from "axios";
import Hero from "./common/hero";
import Description from "./common/description";
import BlogLanding from "./common/blog";
import Pricelist from "./common/pricelist";

interface HomePagesProps {
  logoUrl: string;
}

export default function HomePages() {


  return (
    <>
      <Headers />
      <Hero />
      <BlogLanding />
      <Pricelist />
    </>
  );
}
