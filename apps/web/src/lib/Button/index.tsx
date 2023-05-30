import { Color } from "@/types/enum";

export default function Button({
  children,
  className,
  bgColor = Color.Black,
  color = Color.Teal,
  text = "button",
  height = "50px",
  width = "100px",
  padding = "16px",
  onClick,
}: ButtonProps) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bgColor,
        height: height,
        width: width,
        paddingLeft: padding,
        paddingRight: padding,
      }}
      className={className}
      onClick={onClick}
    >
      {children ? children : text}
    </button>
  );
}
