export interface EpisodeProps { }

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