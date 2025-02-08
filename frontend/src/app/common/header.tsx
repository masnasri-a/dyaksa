import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Headers() {
  const [logoUrl, setLogoUrl] = useState<string>("");

const MENU = [
    {title: 'Home', url: '/'},
    {title: 'Portofolio', url: '/portofolio'},
    {title: 'Pricelist', url: '/pricelist'},
    {title: 'Review', url: '/review'},
    {title: 'Contact', url: '/contact'}
]


  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/contents?populate=%2A&filters%5Bkey%5D=logo');
        const logoUrl = process.env.NEXT_PUBLIC_BASE_API?.replace("/api", "") + response.data.data[0].Media[0].url;
        setLogoUrl(logoUrl);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 gap-4 z-50 backdrop-blur-md'>
      {logoUrl && <Image src={logoUrl} alt="logo" width={100} height={100} />}
      <div className="flex">
        {MENU.map((item, index) => (
          <a key={index} href={item.url} className="mx-4 text-white hover:text-gray-500 transition duration-300">{item.title}</a>
        ))}
      </div>
      <a href="" className='border px-4 py-1 flex items-center justify-center text-white border-neutral-200 rounded-2xl font-light text-sm hover:blu hover:text-white hover:transition'><span>Book Now</span></a>
    </div>
  );
}

