interface ResponsiveImageProps {
  basePath: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

export function ResponsiveImage({
  basePath,
  alt,
  fill = false,
  className = "",
}: ResponsiveImageProps) {
  const extension = basePath.endsWith(".jpg") ? ".jpg" : ".png";
  const pathWithoutExt = basePath.replace(/\.(png|jpg)$/, "");

  const baseClasses = fill ? "absolute inset-0 h-full w-full object-cover" : "";

  return (
    <picture>
      <source
        media="(max-width: 767px)"
        srcSet={`${pathWithoutExt}-mobile${extension}`}
      />
      <source
        media="(max-width: 1023px)"
        srcSet={`${pathWithoutExt}-tablet${extension}`}
      />
      <img
        src={`${pathWithoutExt}${extension}`}
        alt={alt}
        className={`${baseClasses} ${className}`}
      />
    </picture>
  );
}
