import styled from 'styled-components/macro';

const Container600 = styled.div`
  margin: 0 auto;
  padding: 10px 0;

  @media screen and (min-width: 769px) {
    max-width: 600px;
    padding: 20px;
  }
`;

export default Container600;
