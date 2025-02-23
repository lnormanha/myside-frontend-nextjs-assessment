import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background-color: var(--background-color, #000);
  border-bottom: 1px solid var(--border-color, #4d4d4d);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const LeftContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
