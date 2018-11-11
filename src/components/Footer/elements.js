import styled from 'styled-components'
import { Row } from 'react-styled-flexboxgrid'

export const FooterStyled = styled.footer`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
`

export const FollowUs = styled.section`
  background: ${props => props.theme.colors.black};
`

export const Node = styled.span`
  opacity: 0.5;
  color: ${props => props.theme.colors.white};
  display: block;
  margin-bottom: 6px;
`

export const Social = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    li {
      margin-bottom: 24px;
    }
  }

  li:not(:last-child) {
    margin-right: 24px;
  }
`

export const Office = styled(Row)`
  overflow: hidden;
`