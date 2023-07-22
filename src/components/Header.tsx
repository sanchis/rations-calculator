import type { ReactElement, ReactNode } from 'react'
interface Props {
  as: 'h1' | 'h2'
  children: ReactNode
}
export const Header = ({ as: Component, children }: Props): ReactElement => {
  const styles = {
    h1: 'text-2xl font-bold',
    h2: ''
  }
  return (
    <Component className={styles[Component]}>{children}</Component>
  )
}
