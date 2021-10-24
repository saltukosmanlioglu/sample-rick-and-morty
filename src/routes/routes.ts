import EpisodeDetail from '../pages/episode-detail'
import Character from '../pages/character'
import Episodes from '../pages/episodes'

import { Routes } from './types'

export const routes: Routes[] = [
  { name: 'EpisodeDetail', component: EpisodeDetail },
  { name: 'Character', component: Character },
  { name: 'Episodes', component: Episodes }
]