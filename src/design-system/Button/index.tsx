import React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: string;
}

const StyledButton = styled.button`
  width: 10rem;
  padding: 2rem;
  background-color: cadetblue;
`;

export const Button = ({ onClick, children }: IButtonProps): ReactElement => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
