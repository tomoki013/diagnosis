import Link from "next/link";
import Image from "next/image";

interface CardProps {
  href: string;
  title: string;
  description: string;
  thumbnailImage?: string;
}

export const Card = ({
  href,
  title,
  description,
  thumbnailImage,
}: CardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/30">
        <div className="relative h-40 w-full">
          <Image
            src={thumbnailImage || "/default-thumbnail.jpg"} // デフォルト画像を用意
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-white">{title}</h3>
          <p className="text-gray-400 text-sm mt-1 truncate">{description}</p>
        </div>
      </div>
    </Link>
  );
};
