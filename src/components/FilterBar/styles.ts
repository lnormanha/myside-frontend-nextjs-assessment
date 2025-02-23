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
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #4d4d4d;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  min-width: 500px;
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
