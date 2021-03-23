import styled from 'styled-components';

export const CommentContainer = styled.div`
  margin-top: 10px;
  text-align: left;
  a {
    text-decoration: none;
  }

  @media (min-width: 600px) {
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 2px;
  margin-right: 6px;
  vertical-align: top;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.SURFACE_COLOR};
  border-color: ${(props) => props.theme.ON_SURFACE_2_COLOR};

  display: inline-block;
  box-sizing: border-box;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.4);
  border-radius: 18px;

  padding: 15px;
  width: auto;
  max-width: calc(100% - 56px);
  @media (min-width: 600px) {
  }
`;

export const Username = styled.span`
  color: ${(props) => {
    switch (props.color) {
      case 0:
        return '#339933';
      case 1:
        return '#ff5917';
      case 2:
        return '#bb0000';
      default:
        return 'white';
    }
  }};
`;

export const CommentText = styled.div`
  color: ${(props) => props.theme.ON_SURFACE_COLOR_2};
  font-size: 14px;
  word-break: break-word;

  a {
    color: ${(props) => props.theme.PRIMARY_COLOR};
  }
`;

export const ResponsesContainer = styled.div`
  margin-left: 60px;
`;