import React, { useState } from 'react';
import { Link } from 'gatsby';
import TypeIt from 'typeit-react';
import styled from 'styled-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { color } from 'utils/theme';

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
            loopDelay: 60000
          }}
          getBeforeInit={instance => {
            instance
              .type("hi, I'm an", { delay: 100 })
              .move(-1, { speed: 25, delay: 100 })
              .delete(1)
              .type('A')
              .move('END')
              .delete(2)
              .type('<strong style="color:#fff">An</strong>')
              .type(' <small><em>(@annguyenwasd)</em></small>')
              .break()
              .pause(400)
              .type('A front-end developer!!!')
              .pause(5000)
              .move('START')
              .move(1)
              .delete(1)
              .type('H')
              .move(10)
              .delete(2)
              .type(
                '<strong style="color:#fff"><mark>&nbsp;An&nbsp;</mark></strong>'
              )
              .pause(3000)
              .move(16)
              .break();

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
  color: ${color};

  @media screen and (min-width: 426px) {
    padding-top: 20%;
  }
`;

export default IndexPage;
