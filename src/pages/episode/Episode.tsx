import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { Image, Text } from 'react-native'
import { useRoute } from '@react-navigation/core'

import Header from 'components/header'
import Loader from 'components/loader'
import MainView from 'components/main-view'

import { Character } from './types'
import * as Styled from './Episode.styled'
import { GenderEnum } from './enum'

const Episode: React.ComponentType = () => {
  const [character, setCharacter] = useState<Character>()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const route: any = useRoute()

  const getCharacter = useCallback(() => {
    setIsLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/${route.params.id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setCharacter(data)
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
    getCharacter()
  }, [getCharacter])

  return (
    <MainView>
      <Header text="Detay" title={character?.name || ''} />
      {isLoading
        ? <Loader />
        : character && (
          <MainView gutter>
            <Styled.CharacterImage
              source={{ uri: character.image }}
              resizeMode="cover"
            />
            <Text>Durumu : {character.status}</Text>
            <Text>Cinsiyet : {character.gender === GenderEnum.Female ? 'Kadın' : 'Erkek'}</Text>
            <Text>Species : {character.species}</Text>
            <Text>Tür : {character.type}</Text>
            <Text>Gerçek ad : {character.origin.name}</Text>
            <Text>created : {new Date(character.created).toLocaleString()}</Text>
          </MainView>
        )
      }
    </MainView>
  )
}

export default Episode
