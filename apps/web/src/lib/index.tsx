import Link from "next/link";

export function Title({ className, title }: TitleProps) {
  return (
    <h1
      className={className}
      style={{ fontWeight: "bold", fontSize: "large" }}
    >
      {title}
    </h1>
  );
}

export function Text({ children, className }: TextProps) {
  return <p className={className}>{children}</p>;
}

export function NavLink({ className, href, children }: NavProps) {
  return (
    <nav className={className}>
      <Link href={href}>{children}</Link>
    </nav>
  );
}
