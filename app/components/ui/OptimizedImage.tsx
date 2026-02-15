interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
}: OptimizedImageProps) {
  // Derive WebP path from original path
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  const imgClasses = fill
    ? `absolute inset-0 h-full w-full object-cover ${className}`
    : className;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imgClasses}
      />
    </picture>
  );
}
