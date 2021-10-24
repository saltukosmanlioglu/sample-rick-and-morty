import React, {
  useEffect,
  useState
} from 'react'
import { ScrollView, Text } from 'react-native'

import Header from 'components/header'
import MainView from 'components/main-view'

import { RickAndMortyProps } from './types'
import * as Styled from './List.styled'
import Loader from 'components/loader'

const Episode: React.ComponentType = ({ navigation }: any) => {
  const [rickAndMorty, setRickAndMorty] = useState<RickAndMortyProps>()

  const [activeAccordion, setActiveAccordion] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getRickAndMorty = () => {
    setIsLoading(true)
    fetch('https://rickandmortyapi.com/api/episode', {
      method: 'GET'
    })
      .then(res => res.json())
      .then((data: RickAndMortyProps) => {
        setRickAndMorty(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      getRickAndMorty()
    }, 1000)
  }, [])

  const handleAccordionClick = (id: number) => {
    activeAccordion === id
      ? setActiveAccordion(0)
      : setActiveAccordion(id)
  }

  const handleDetailClick = (id: number) => {
    navigation.navigate('Detail', {
      id,
      title: 'Rick & Morty'
    })
  }

  return (
    <MainView>
      <Header title="Rick & Morty" />
      <ScrollView>
        {isLoading ? (
          <Loader />
        ) :
          rickAndMorty?.results.map((item, index) => (
            <Styled.Accordion
              key={item.id}
              onPress={() => handleAccordionClick(item.id)}
            >
              <Styled.Title>
                {`${index < 9 ? '0' : ''}${index + 1} - ${item.name}`}
              </Styled.Title>
              {item.id === activeAccordion ? (
                <React.Fragment>
                  <Text>Yayın tarihi : {new Date(item.created).toLocaleString()}</Text>
                  <Text>Bölüm : {item.episode}</Text>
                  <Styled.More onPress={() => handleDetailClick(item.id)}>
                    <Styled.MoreText>Daha Fazla..</Styled.MoreText>
                  </Styled.More>
                </React.Fragment>
              ) : null}
            </Styled.Accordion>
          ))
        }
      </ScrollView>
    </MainView>
  )
}

export default Episode