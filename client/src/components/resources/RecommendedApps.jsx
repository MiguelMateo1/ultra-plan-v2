import React from 'react';
import styled from 'styled-components';

const appsData = [
    {
      title: 'App 1',
      tags: ['Productivity', 'Utility'],
      image: 'https://assets.quizlet.com/a/j/dist/app/i/brandmark/1024.0e9431247202b7b.png',
      link: 'https://example.com/app1'
    },
    {
      title: 'App 2',
      tags: ['Entertainment', 'Games'],
      image: 'https://assets.quizlet.com/a/j/dist/app/i/brandmark/1024.0e9431247202b7b.png',
      link: 'https://example.com/app2'
    },
    {
      title: 'App 3',
      tags: ['Health', 'Fitness'],
      image: 'https://assets.quizlet.com/a/j/dist/app/i/brandmark/1024.0e9431247202b7b.png',
      link: 'https://example.com/app3'
    },
  ];
  
  const RecommendedApps = () => {
    return (
      <Section>
        <h2>Apps</h2>
            <AppsContainer>
            {appsData.map((app, index) => (
                <App key={index}>
                <AppLink href={app.link} target="_blank" rel="noopener noreferrer">
                    <AppImage src={app.image} alt={app.title} />
                    <AppTitle>{app.title}</AppTitle>
                    <AppTags>{app.tags.join(', ')}</AppTags>
                </AppLink>
                </App>
            ))}
            </AppsContainer>
      </Section>
    );
  };
  
  const Section = styled.section`
    background-color: var(--grey-3);
    width: 100%;
    margin-bottom: 30px;
    padding: 3rem 5rem;
  
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      padding: 2rem 2rem;
    }
  `;
  
  const AppsContainer = styled.div`
  border-radius: 8px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 10px;
  `;
  
  const App = styled.div`
    background-color: var(--grey-4);
    border: 2px solid var(--grey-5);
    border-radius: 8px;
    margin-right: 10px;
    flex: 0 0 auto;
    text-align: center;
  `;
  
  const AppLink = styled.a`
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 10px;
  `;
  
  const AppImage = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 8px;
  `;
  
  const AppTitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    margin: 8px 0;
  `;
  
  const AppTags = styled.p`
    background-color: var(--grey-6);
    max-width: 200px;
    font-size: 14px;
    margin: 0;
    padding: 5px;
    border-radius: 0 0 8px 8px;
  `;
  
  export default RecommendedApps;