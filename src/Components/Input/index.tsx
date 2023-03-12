import { InputHTMLAttributes, forwardRef } from 'react'

import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  OptionalText,
} from './styles'
import { RegularText } from '../Typography'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  optionalText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, optionalText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />

          {optionalText && <OptionalText>{optionalText}</OptionalText>}
        </InputStyleContainer>

        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
Input.displayName = 'Input'
