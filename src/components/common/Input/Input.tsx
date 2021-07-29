// DEPENDENCIES
import React, { memo } from "react";

// STYLED
import {
  InputContainer,
  StyledInput,
  StyledLabel,
  StyledError,
} from "./styles";

interface IProps {
  type: "text" | "password" | "email";
  name: string;
  label: string;
  onChange(event: any): void;
  value: any;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  disableError?: boolean;
}

const Input = memo<IProps>(
  ({
    type,
    name,
    label,
    onChange,
    placeholder,
    value,
    error,
    disabled,
    disableError,
  }) => {
    return (
      <InputContainer className="input__container">
        {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}

        <StyledInput
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          showError={error ? true : false}
        />

        {!disableError && (
          <StyledError>{error && <span>{error}</span>}</StyledError>
        )}
      </InputContainer>
    );
  }
);

export { Input };
