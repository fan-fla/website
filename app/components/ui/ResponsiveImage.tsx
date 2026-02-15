interface ResponsiveImageProps {
  basePath: string;
  alt: string;
  fill?: boolean;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export function ResponsiveImage({
  basePath,
  alt,
  fill = false,
  className = "",
  loading = "lazy",
  fetchPriority,
}: ResponsiveImageProps) {
  const extension = basePath.endsWith(".jpg") ? ".jpg" : ".png";
  const pathWithoutExt = basePath.replace(/\.(png|jpg)$/, "");

  const baseClasses = fill ? "absolute inset-0 h-full w-full object-cover" : "";

  return (
    <picture>
      {/* Mobile - WebP first, then fallback */}
      <source
        media="(max-width: 767px)"
        srcSet={`${pathWithoutExt}-mobile.webp`}
        type="image/webp"
      />
      <source
        media="(max-width: 767px)"
        srcSet={`${pathWithoutExt}-mobile${extension}`}
      />

      {/* Tablet - WebP first, then fallback */}
      <source
        media="(max-width: 1023px)"
        srcSet={`${pathWithoutExt}-tablet.webp`}
        type="image/webp"
      />
      <source
        media="(max-width: 1023px)"
        srcSet={`${pathWithoutExt}-tablet${extension}`}
      />

      {/* Desktop - WebP first, then fallback */}
      <source srcSet={`${pathWithoutExt}.webp`} type="image/webp" />

      <img
        src={`${pathWithoutExt}${extension}`}
        alt={alt}
        className={`${baseClasses} ${className}`}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
