import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import TypeIt from 'typeit-react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function Typing({ themeMode }) {
  const [typeIt, setTypeIt] = useState(null);
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, [themeMode]);

  return (
    <Heading>
      <TypeIt
        key={key}
        onMouseOver={() => typeIt.freeze()}
        onMouseOut={() => typeIt.unfreeze()}
        options={{
          loop: true,
          speed: 50,
          startDelay: 1000
          // loopDelay: 60000
        }}
        getBeforeInit={instance => {
          const texts = ['An (pronounce: /ʌn/)', 'a front-end developer'];
          instance.type('I am ');

          texts.forEach(text => {
            instance
              .type(`${text}`, { delay: 2000 })
              .delete(text.length, { speed: 100 });
          });

          // Remember to return it!
          return instance;
        }}
        getAfterInit={instance => {
          setTypeIt(instance);
          return instance;
        }}
      />
    </Heading>
  );
}

export const Heading = styled.div`
  font-weight: 300;
  font-size: 1.5rem;
  width: 100%;
`;

Typing.propTypes = {
  themeMode: PropTypes.string.isRequired
};

Typing.defaultProps = {};

export default connect(state => ({ themeMode: state.mode }), null)(Typing);
