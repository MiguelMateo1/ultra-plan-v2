import styled from 'styled-components';

const Styles = styled.article`
  background: var(--grey-05);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--box-shadow);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-1);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--secondary-5);
    color: var(--grey-05);
    border-radius: var(--border-radius);
    font-size: 1.7rem;
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-4);
      letter-spacing: var(--letterSpacing);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .hour {
    padding: 0px 10px;
    border-radius: var(--border-radius);
    background-color: var(--grey-1);
    margin-right: 5px;
  }

  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 1rem;
    padding: 3px 5px;
    background: #e0e8f9;
    color: #647acb;
  }
  .overdue {
    color: #d66a6a;
    background: #7EBC66;
  }
  .completed {
    color: #fff;
    background: #51B048;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    padding: 3px 11px;
    font-size: .9rem;
    border: 1px solid var(--grey-2);
  }
  .edit-btn {
    color: #0f5132;
    background: #d1e7dd;
    margin-right: 0.5rem;
    border-radius: 4px;
    padding: 3px 6px 8px 6px;
    text-transform: uppercase;
  }
  .delete-btn {
    color: #842029;
    ${'' /* background: #f8d7da; */}
  }
`;

export default Styles;
