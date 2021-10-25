import React from 'react'

import { PagerProps } from './types'
import * as Styled from './Pager.styled'

const Pager: React.FunctionComponent<PagerProps> = ({
  onChange,
  pages
}) => {
  const arr = []

  for (let index = 0; index < pages; index++) {
    arr.push(index)
  }

  return (
    <Styled.Pager>
      {arr.map((page, index) => (
        <Styled.Pagination key={index} onPress={() => onChange(index + 1)}>
          <Styled.PaginationText>{index + 1}</Styled.PaginationText>
        </Styled.Pagination>
      ))}
    </Styled.Pager>
  )
}

export default Pager
