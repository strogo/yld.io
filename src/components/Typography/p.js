import styled from 'styled-components'
import remcalc from 'remcalc'
import is from 'styled-is'

export default styled.p`
  color: ${props => props.theme.colors.text};
  font-size: ${remcalc(18)};
  padding: ${remcalc(0)} 0 ${remcalc(12)} 0;
  line-height: 1.33;

  ${is('padded')`
    padding: ${remcalc(0)} 0 ${remcalc(24)} 0;
  `};

  ${is('reverse')`
    color: ${props => props.theme.colors.white};
  `};

  ${is('muted')`
    opacity: .5;
  `};
`
