export default function Form({ children, className }: FormProps) {
  return <form className={className}>{children}</form>
}

export function Input({
  defaultValue,
  value,
  className,
  placeholder,
  label,
  type = 'text',
  onChange = () => {},
}: InputProps) {
  return (
    <div className={`${className} border px-4 py-2 rounded-lg`}>
      <label className="block">{label}</label>
      <input
        type={type}
        className="w-full outline-none"
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
