export interface ListProps { }

export interface RickAndMortyProps {
  info: Info
  results: Array<Results>
}

export interface Info {
  count: number
  next: string
  pages: number
  prev: string
}

export interface Results {
  id: number
  air_date: string
  characters: Array<string>
  created: string
  episode: string
  name: string
  url: string
}

export interface Character {
  id: number
  created: string
  episode: Array<string>
  gender: string
  image: string
  location: NameUrl
  name: string
  origin: NameUrl
  species: string
  status: string
  type: string
  url: string
}

export interface NameUrl {
  name: string
  url: string
}