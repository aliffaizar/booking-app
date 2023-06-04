interface BaseProps {
  height?: string
  width?: string
  color?: string
  bgColor?: string
  className?: string
}

interface TitleProps extends BaseProps {
  title: string
}

interface TextProps extends BaseProps {
  children: ReactNode
}

interface NavProps extends BaseProps {
  href: string
  children: ReactNode
}

/* Form Props */

interface FormProps extends BaseProps {
  children?: ReactNode
}

interface InputProps extends BaseProps {
  defaultValue?: string
  value?: string
  label?: string
  placeholder: string
  type?: string
  onChange?: () => void
}

/* Button Props */

interface ButtonProps extends BaseProps {
  children?: ReactNode
  text?: string
  padding?: string
  onClick?: (event: any) => void
}

/* Card Props */

interface CardProps extends BaseProps {
  children: ReactNode
}

interface CardImageProps extends BaseProps {
  src: string
  alt: string
}

/* List Props */

interface ListProps extends BaseProps {
  children: ReactNode
}

interface ListItemProps extends BaseProps {
  item?: string
  children?: ReactNode
}
