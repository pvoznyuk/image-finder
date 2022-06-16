import React, { useContext } from 'react'
import { SearchForm } from '@components/SearchForm'
import { Unsplash } from '@components/Unsplash'
import { Card } from '@components/Card'
import { Layout } from '@components/Layout'
import { Context } from './context/store'
import { Step } from './types'
import ApiService from './services/ApiService'

const App = () => {
  const {
    state: { step, topic, customTopic },
    dispatch,
  } = useContext(Context)

  const queryTopic = (customTopic.value || topic.value).toLowerCase()

  const fetchPhotos = async () => {
    try {
      const data = await ApiService.Instance.getPhoto(queryTopic)
      console.log({ data })

      dispatch({
        type: 'SET_PHOTO',
        payload: {
          id: data.id,
          url: data.urls.small,
          description: data.description,
        },
      })
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'API Error',
      })
    }
  }

  const handleFindPhoto = () => {
    dispatch({
      type: 'SET_LOADING',
    })

    fetchPhotos()
  }

  const handleReset = () => {
    dispatch({
      type: 'SET_STEP',
      payload: Step.FORM,
    })
  }

  const handleAccept = () => {
    dispatch({
      type: 'SET_STEP',
      payload: Step.CARD,
    })
  }

  const renderWitch = () => {
    switch (step) {
      case Step.MATCH:
        return <Unsplash onAccept={handleAccept} onReject={handleFindPhoto} />
      case Step.CARD:
        return <Card />
      default:
        return <SearchForm onSubmit={handleFindPhoto} />
    }
  }

  return <Layout onReset={handleReset}>{renderWitch()}</Layout>
}

export default App
