interface RegisterLayoutProps {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <div>
      <h1>Register Layout</h1>
      {children}
    </div>
  )
}
