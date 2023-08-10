import React from 'react';
import styled from 'styled-components';

const videosData = [
  {
    title: 'Video 1',
    tags: ['Technology', 'Tutorials'],
    link: 'https://youtu.be/VilDW2Aj9aM'
  },
  {
    title: 'Video 2',
    tags: ['Entertainment', 'Comedy'],
    link: 'https://www.youtube.com/watch?v=VIDEO_ID_2'
  },
  {
    title: 'Video 3',
    tags: ['Education', 'Science'],
    link: 'https://www.youtube.com/watch?v=VIDEO_ID_3'
  },
];

const getYoutubeThumbnailUrl = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const extractVideoIdFromLink = (link) => {
  // regular expression to match and extract the unique video id
  const youtubeLinkRegex = /(?:v=|youtu\.be\/)(.{11})/;
  const match = link.match(youtubeLinkRegex);
  return match ? match[1] : null;
};

const RecommendedVideos = () => {
  return (
    <Section>
      <h2>Videos</h2>
      <VideosContainer>
        {videosData.map((video, index) => {
          const videoId = extractVideoIdFromLink(video.link);
          if (videoId) {
            const thumbnailUrl = getYoutubeThumbnailUrl(videoId);

            return (
              <Video key={index}>
                <VideoLink href={video.link} target="_blank" rel="noopener noreferrer">
                  <VideoThumbnail src={thumbnailUrl} alt={video.title} />
                  <VideoTitle>{video.title}</VideoTitle>
                  <VideoTags>{video.tags.join(', ')}</VideoTags>
                </VideoLink>
              </Video>
            );
          } else {
            return null; // Invalid YouTube link
          }
        })}
      </VideosContainer>
    </Section>
  );
};

const Section = styled.section`
  background-color: var(--grey-6);
  width: 100%;
  border-radius: 32px 32px 0px 0px;
  margin-bottom: -49px;
  padding: 3rem 5rem;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const VideosContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const Video = styled.div`
  width: 60%;
  max-width: 300px;
  background-color: var(--grey-4);
  border: 2px solid var(--grey-3);
  border-radius: 8px;
  margin-right: 10px;
  flex: 0 0 auto;
  text-align: center;
`;

const VideoLink = styled.a`
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 10px;
`;

const VideoThumbnail = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const VideoTitle = styled.h3`
  font-size: 18px;
  margin: 8px 0;
`;

const VideoTags = styled.p`
  background-color: var(--grey-6);
  max-width: 300px;
  font-size: 14px;
  margin: 0;
  padding: 5px;
  border-radius: 0 0 8px 8px;
`;

export default RecommendedVideos;