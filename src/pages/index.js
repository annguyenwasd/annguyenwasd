import React, { useState } from 'react';
import { Link } from 'gatsby';
import TypeIt from 'typeit-react';
import styled from 'styled-components';

import Layout from 'components/layout';
import SEO from 'components/seo';

function IndexPage() {
  const [typeIt, setTypeIt] = useState(null);
  const key = Date.now();

  return (
    <Layout>
      <SEO title="Home" />
      <Heading>
        <TypeIt
          onMouseOver={() => typeIt.freeze()}
          onMouseOut={() => typeIt.unfreeze()}
          options={{
            loop: true,
            speed: 50,
            startDelay: 1000,
            loopDelay: 20000
          }}
          getBeforeInit={instance => {
            instance
              .type("hi, I'm an", { delay: 100 })
              .move(-1, { speed: 25, delay: 100 })
              .delete(1)
              .type('A')
              .move('END')
              .delete(2)
              .type('<strong style="color:#e86505">An</strong>')
              .type(' <small><em>(@anguyenwasd)</em></small>')
              .move('START')
              .move(1)
              .delete(1)
              .type('H')
              .move('END')
              .break()
              .pause(400)
              .type('A front-end developer!!!');

            // Remember to return it!
            return instance;
          }}
          getAfterInit={instance => {
            setTypeIt(instance);
            return instance;
          }}
        />
      </Heading>
    </Layout>
  );
}

const Heading = styled.div`
  font-weight: 300;
  font-size: 3rem;

  @media screen and (min-width: 426px) {
    padding-top: 20%;
  }
`;

export default IndexPage;
