import styled from 'styled-components';

const booksData = [
    {
      title: 'Ultralearning',
      tags: ['Mindset', 'Learning'],
      image: 'https://m.media-amazon.com/images/I/51PfH156fIL._SY346_.jpg',
      link: 'https://www.amazon.com/Ultralearning-Master-Outsmart-Competition-Accelerate/dp/006285268X/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1675111389&sr=1-1',
      desc: 'Master Hard Skills, Outsmart the Competition, and Accelerate Your Career.',
    },
    {
      title: 'Extreme Ownership',
      tags: ['Mindset', 'Accountability'],
      image: 'https://m.media-amazon.com/images/I/51yoHjJDQ3L._SX329_BO1,204,203,200_.jpg',
      link: 'https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs/dp/1250183863/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1675112276&sr=8-1',
      desc: 'Personal accountability a core principles for achieving success in professional and personal endeavors.'
    },
    {
      title: 'Atomic Habits',
      tags: ['Habits', 'Productivity'],
      image: 'https://m.media-amazon.com/images/I/51ZJ9RjiC0L._SX328_BO1,204,203,200_.jpg',
      link: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/1847941842/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1675112258&sr=1-1',
      desc: 'Science-backed methods for creating and sustaining small, powerful habits that lead to personal growth.',
    },
    {
      title: 'Peak',
      tags: ['Learning', 'Growth'],
      image: 'https://m.media-amazon.com/images/I/41Rc7VXWGxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      link: 'https://www.amazon.com/Peak-Secrets-New-Science-Expertise/dp/0544947223/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1675112340&sr=8-1',
      desc: 'Insights into how individuals can achieve mastery and reach their highest levels of performance.',
    },
  ];
  
  const RecommendedBooks = () => {
    return (
      <Section>
        <h2>Recommended Books</h2>
        <BooksContainer>
          {booksData.map((book, index) => (
            <Book key={index}>
              <BookLink href={book.link} target="_blank" rel="noopener noreferrer">
                <BookImage src={book.image} alt={book.title} />
                <BookTitle>{book.title}</BookTitle>
                <BookInfo>
                  <BookTags>
                    {book.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </BookTags>
                  <BookDesc>{book.desc}</BookDesc>
                </BookInfo>
              </BookLink>
            </Book>
          ))}
        </BooksContainer>
      </Section>
    );
  };
  
  const Section = styled.section`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 14px;
    background-color: var(--grey-6);
    width: 100%;
    margin-top: -45px;
    padding: 3rem 5rem;
    border-radius: 0px 0px 35px 35px;
    margin-bottom: 30px;
  
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      padding: 2rem 2rem;
    }
  `;
  
  const BooksContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 10px;
    border-radius: 8px;
  `;
  
  const Book = styled.div`
    background-color: var(--grey-5);
    border: 2px solid var(--grey-3);
    border-radius: 8px;
    margin-right: 10px;
    flex: 0 0 auto;
    text-align: center;
  `;
  
  const BookLink = styled.a`
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 10px;
  `;
  
  const BookImage = styled.img`
    max-width: 100%;
    height: 290px;
    border-radius: 8px;
  `;
  
  const BookTitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    margin: 8px 0;
  `;

  const BookInfo = styled.div`
    font-size: 14px;
    background-color: var(--grey-4);
    border-radius: 8px;
  `;

  const BookTags = styled.div`
    margin: 0 auto;
    max-width: 180px;
    padding: 4px 5px;
  `;

  const Tag = styled.span`
  margin: 4px 5px 0px 0px;
  padding: 4px 5px;
  background-color: var(--grey-3);
  border-radius: 4px;
  display: inline-block;
`;
  
  const BookDesc = styled.p`
    max-width: 180px;
    color: var(--grey-2);
    margin: 0;
    padding: 5px;
`;
  export default RecommendedBooks;