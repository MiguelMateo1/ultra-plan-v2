import styled from 'styled-components'

const Styles = styled.section`
  margin-top: 1rem;
  max-width: 2000px;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 600;
    margin-bottom: .5rem;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`
export default Styles
