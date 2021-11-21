import styled from 'styled-components'
import { Heading } from '@prodvdjin/dmgk-uikit'

const Title = styled(Heading).attrs({ size: 'lg' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
`

export default Title
