import React, { useCallback, useEffect, useState } from 'react'
import { Text } from 'react-native'
import { useRoute } from '@react-navigation/core'

import Header from 'components/header'
import Loader from 'components/loader'
import MainView from 'components/main-view'

import { Episode } from './types'

const Detail: React.ComponentType = ({ navigation }: any) => {
  const [episode, setEpisode] = useState<Episode>()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const route: any = useRoute()

  const getEpisode = useCallback(() => {
    setIsLoading(true)
    fetch(`https://rickandmortyapi.com/api/episode/${route.params.id}`)
      .then(res => res.json())
      .then(data => {
        setEpisode(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [route.params.id])

  useEffect(() => {
    getEpisode()
  }, [getEpisode])

  return (
    <MainView>
      <Header text={route.params.title} title="Detay" />
      {isLoading ? (
        <Loader />
      ) : episode && (
        <MainView gutter>
          <Text>Yayınlanma tarihi {new Date(episode.created).toLocaleString()}</Text>
        </MainView>
      )}
    </MainView>
  )
}

export default Detail
