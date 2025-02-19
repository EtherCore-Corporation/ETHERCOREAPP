"use client";

import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
}

const BlogImage = ({ src, alt }: BlogImageProps) => {
  return (
    <div className="my-8 relative w-full aspect-video rounded-xl overflow-hidden">
      <Image
        src={src}
        alt={alt || "Blog Image"}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </div>
  );
};

export default BlogImage;
