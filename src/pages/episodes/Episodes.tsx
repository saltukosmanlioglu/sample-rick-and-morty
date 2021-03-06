import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { ScrollView, Text } from 'react-native'

import Header from 'components/header'
import Loader from 'components/loader'
import MainView from 'components/main-view'
import Pager from 'components/pager'

import { EpisodeProps } from './types'
import * as Styled from './Episodes.styled'

const Episodes: React.ComponentType = ({ navigation }: any) => {
  const [episodes, setEpisodes] = useState<EpisodeProps>()

  const [activeAccordion, setActiveAccordion] = useState<number>(0)
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getEpisodes = useCallback(() => {
    setIsLoading(true)
    fetch(`https://rickandmortyapi.com/api/episode?page=${pageIndex}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((data: EpisodeProps) => {
        setEpisodes(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  },[pageIndex])

  useEffect(() => {
    setTimeout(() => {
      getEpisodes()
    }, 1000)
  }, [getEpisodes])

  const handleAccordionClick = (id: number) => {
    activeAccordion === id
      ? setActiveAccordion(0)
      : setActiveAccordion(id)
  }

  const handleDetailClick = (id: number) => {
    navigation.navigate('EpisodeDetail', {
      id,
      title: 'Bölümler'
    })
  }

  return (
    <MainView>
      <Header title="Bölümler" />
      <ScrollView>
        {isLoading ? (
          <Loader />
        ) :
          episodes?.results.map((item, index) => (
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
        <Pager
          pages={3}
          onChange={(index) => setPageIndex(index)}
        />
      </ScrollView>
    </MainView>
  )
}

export default Episodes