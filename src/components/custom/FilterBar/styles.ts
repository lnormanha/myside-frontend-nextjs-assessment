import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 100px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start
    gap: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #4d4d4d;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  min-width: 500px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #4d4d4d;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
`;

export const Option = styled.option`
  color: #4d4d4d;
  &:hover {
    background-color: #fff;
    color: #4d4d4d;
  }
`;
