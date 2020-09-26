import styled, { css } from 'styled-components/macro'

const DEFAULT_VARIANT = 't1'
const DEFAULT_COLOR = 'white'

const getVariant = props => {
  const variants = Object.keys(props.theme.text)
  return variants.find(variant => !!props[variant]) || DEFAULT_VARIANT
}

const getColor = props => props.theme.color[props.color || DEFAULT_COLOR]

export const Text = styled.div`
  ${props => {
    const color = getColor(props)

    return css`
      display: ${props.inline ? 'inline-block' : 'block'};

      color: ${color};

      ${props.theme.text[getVariant(props)]}
      line-height: 1.4;

      word-wrap: break-word;

      ${props.bold && `font-weight: bold;`}
    `
  }}
`
