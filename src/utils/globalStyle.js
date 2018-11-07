import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import remcalc from 'remcalc'
import { lighten } from 'polished'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=PT+Mono|Roboto:400,500,700');
  ${reset}

  body {
    font-size: ${remcalc(18)};
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.white};
    font-weight: normal;
    line-height: 1.33;
    color: ${props => props.theme.colors.text};


    * {
      box-sizing: border-box;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    position: relative;


    &:hover {
      color: ${props => lighten(0.2, props.theme.colors.text)};
    }
  }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: ${props => props.theme.colors.lightGray};
      font-style: italic;
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: ${props => props.theme.colors.lightGray};
      font-style: italic;
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: ${props => props.theme.colors.lightGray};
      font-style: italic;
    }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
`
