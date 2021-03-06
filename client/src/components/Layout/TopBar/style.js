import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${(props) => props.theme.SURFACE_COLOR};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  height: 54px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

export default Header;
