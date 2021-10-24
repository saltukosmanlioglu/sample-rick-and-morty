import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/core'

import Header from 'components/header'
import Loader from 'components/loader'
import MainView from 'components/main-view'

import { Episode } from './types'

const EpisodeDetail: React.ComponentType = ({ navigation }: any) => {
  const [episode, setEpisode] = useState<Episode>()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const route: any = useRoute()

  const getEpisode = useCallback(() => {
    setIsLoading(true)
    fetch(`https://rickandmortyapi.com/api/episode/${route.params.id}`, {
      method: 'GET'
    })
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

  const handleCharacterClick = (character: string) => {
    const id = character.split('/')
    navigation.navigate('Character', {
      id: id[id.length - 1]
    })
  }

  return (
    <MainView>
      <Header text={route.params.title} title="Detay" />
      {isLoading ? (
        <Loader />
      ) : episode && (
        <MainView gutter>
          <Text>Yayınlanma tarihi {new Date(episode.created).toLocaleString()}</Text>
          {episode.characters.map((character, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCharacterClick(character)}
            >
              <Text>{character}</Text>
            </TouchableOpacity>
          ))}
        </MainView>
      )}
    </MainView>
  )
}

export default EpisodeDetail
