export default function Card({
  children,
  height,
  width,
  className,
}: CardProps) {
  return (
    <div className={className} style={{ height: height, width: width }}>
      {children}
    </div>
  );
}

export function CardImage({
  src,
  alt,
  height,
  width,
  className,
}: CardImageProps) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={className}
      />
    </div>
  );
}

export function CardBody({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}

export function CardSection({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}
