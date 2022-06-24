import styled from '@emotion/styled';

export const Button = styled.button`
  padding: .5rem;
  box-shadow: rgba(0, 0, 0, .05) 0 6px 24px 0, rgba(0, 0, 0, .08) 0 0 0 1px;
  border-radius: .25rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
