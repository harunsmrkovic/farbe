import React from 'react'
import styled from 'styled-components/macro'
import { Text } from '../Text'

export const Slider = ({
  label,
  value,
  name,
  onChange = () => {},
  ...props
}) => {
  const onInputChange = e => onChange(e.target.value)

  return (
    <div>
      {label && (
        <Text t2 bold>
          {label}
        </Text>
      )}
      <InputSlider
        name={name}
        value={value}
        onChange={onInputChange}
        type="range"
        {...props}
      />
    </div>
  )
}

const InputSlider = styled.input`
  width: 100%;
  margin-top: ${({ theme }) => theme.padding.m};
`
