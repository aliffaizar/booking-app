
export default function List({ children, className }: ListProps) {
  return <ul className={className}>{children}</ul>;
}

export function ListItem({ className, item, children }: ListItemProps) {
  return <li className={className}>{children ? children : item}</li>;
}
