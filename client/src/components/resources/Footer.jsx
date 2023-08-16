import styled from 'styled-components';

const Footer = () => {
  return (
    <Section>
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

export default Footer ;