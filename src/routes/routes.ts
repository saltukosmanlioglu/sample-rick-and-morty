import Detail from '../pages/detail'
import Episode from '../pages/episode'
import List from '../pages/list'

import { Routes } from './types'

export const routes: Routes[] = [
  { name: 'Detail', component: Detail },
  { name: 'Episode', component: Episode },
  { name: 'List', component: List }
]