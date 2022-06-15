import React, { useContext } from 'react'
import { Context } from '../../context/store'
import styles from './Card.scss'

export default function Unsplash() {
  const {
    state: { photo, firstName, lastName },
  } = useContext(Context)

  return (
    <div className={styles.card}>
      {photo?.url && (
        <>
          <div className={styles.cardImage}>
            <img src={photo.url} alt={photo.description} />
          </div>
          <div className={styles.cardInfo}>{`${firstName.value} ${lastName.value}`}</div>
        </>
      )}
    </div>
  )
}
