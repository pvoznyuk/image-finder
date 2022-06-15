import React, { useContext } from 'react'
import { Context } from '../../context/store'
import styles from './Unsplash.scss'

type UnsplashProps = {
  onReject: () => void
  onAccept: () => void
}

export default function Unsplash({ onReject, onAccept }: UnsplashProps) {
  const {
    state: { photo, isLoading },
  } = useContext(Context)

  return (
    <div className={styles.unsplash}>
      <div className={styles.unsplashContainer}>
        {isLoading ? <span>Loading...</span> : <img src={photo.url} alt={photo.description} />}
      </div>

      <nav>
        {photo?.url && (
          <>
            <button onClick={onAccept}>Accept</button>
            <button className={styles.unsplashReject} onClick={onReject}>
              Reject
            </button>
          </>
        )}
      </nav>
    </div>
  )
}
