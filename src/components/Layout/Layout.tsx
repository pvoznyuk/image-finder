import React from 'react'
import styles from './Layout.scss'

type LayoutProps = {
  children: React.ReactNode[] | React.ReactNode
  onReset: () => void
}

const Layout = ({ children, onReset }: LayoutProps) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Image Finder</h1>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <button onClick={onReset}>Reset</button>
      </footer>
    </>
  )
}

export default Layout
