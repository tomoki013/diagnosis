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
    <Link href={href} className="block group relative">
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"
        aria-hidden="true"
      />
      <div className="relative bg-dark-card rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105 h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={thumbnailImage || "/default-thumbnail.jpg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold text-xl text-dark-text group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-dark-text-secondary text-base mt-2 truncate">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
