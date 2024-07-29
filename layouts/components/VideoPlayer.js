import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <div className={`mt-6`}>
      <video width="100%" className={'h-[500px]'} controls>
        <source src={src} type="video/mp4" />
        Ваш браузер не поддерживает тег video.
      </video>
    </div>
  );
};

export default VideoPlayer;
