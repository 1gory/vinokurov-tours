import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: 1366px;
  min-width: 360px;
  padding-left: 98px;
  padding-right: 98px;
  margin: auto;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-left: 17px;
    padding-right: 17px;
  }
`;

export default PageWrapper;
