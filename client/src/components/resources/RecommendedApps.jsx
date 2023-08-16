import styled from 'styled-components';

const appsData = [
    {
      title: 'Quizlet',
      tags: ['Flashcards', 'Studying'],
      image: 'https://assets.quizlet.com/a/j/dist/app/i/brandmark/1024.0e9431247202b7b.png',
      link: 'https://quizlet.com/'
    },
    {
      title: 'Memrise',
      tags: ['Language', 'Studying'],
      image: 'https://upload.wikimedia.org/wikipedia/en/3/39/Memrise-new-logo.png',
      link: 'https://www.memrise.com/en-us/'
    },
    {
      title: 'Evernote',
      tags: ['Note-taking'],
      image: 'https://developer.android.com/static/images/distribute/stories/evernote.png',
      link: 'https://evernote.com/'
    },
    {
      title: 'Musora',
      tags: ['Instruments Learning'],
      image: 'https://play-lh.googleusercontent.com/7_-4nab96XggKoTqB7qatLEnFAScnmDOCEP-tslVZqbi1LHviOGIf1gPA_6bl2oXRA',
      link: 'https://www.musora.com/'
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
    background-color: var(--grey-4);
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
    background-color: var(--grey-5);
    border: 2px solid var(--grey-5);
    border-radius: 8px;
    margin-right: 15px;
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
    max-width: 150px;
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