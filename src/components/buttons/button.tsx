import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
