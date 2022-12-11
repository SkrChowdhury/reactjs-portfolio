import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Blog = () => {
  return (
    <div className="mt-5 pt-5 ">
      <Player
        src="https://assets2.lottiefiles.com/packages/lf20_m6cuL6.json"
        autoplay
        loop
        style={{
          width: '80%',
          height: '100%',
          alignSelf: 'center',
          justifySelf: 'center ',
          marginTop: '1%',
        }}
      />
    </div>
  );
};

export default Blog;
