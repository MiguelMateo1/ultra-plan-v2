import React from 'react';
import styled from 'styled-components';

const booksData = [
    {
      title: 'Ultra Plan',
      tags: ['Fiction', 'Adventure'],
      image: 'https://m.media-amazon.com/images/I/51PfH156fIL._SY346_.jpg',
      link: 'https://example.com/book1',
      desc: 'lkg jfjgv jf hvj hvtfldf frfrgtholom momom m omom ooookjgigk',
    },
    {
      title: 'Book 2',
      tags: ['Mystery', 'Thriller', 'Thriller' ],
      image: 'https://m.media-amazon.com/images/I/51PfH156fIL._SY346_.jpg',
      link: 'https://example.com/book2',
      desc: 'lkg jfjgv jf hvj hvtfldf frfrgtholom t by sder 4rtrg momom m omom ooookjgigk'
    },
    {
      title: 'Book 3',
      tags: ['Fantasy', 'Magic'],
      image: 'https://m.media-amazon.com/images/I/51PfH156fIL._SY346_.jpg',
      link: 'https://example.com/book3',
      desc: 'lkg jfjgv jf hvj hvtfldf frfrgtholom momom m omom ooookjgigk',
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