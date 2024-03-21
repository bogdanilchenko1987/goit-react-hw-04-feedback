import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const FeedbackOptionsItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.25em 1em;
  &:hover,
  :focus {
    background-color: aquamarine;
  }
`;
