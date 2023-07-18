import styled from 'styled-components'

const Styles = styled.section`
  display: grid;
  row-gap: 1rem;
  margin-bottom: 1.5rem;
  margin-top: -1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    margin-top: 0rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`
export default Styles
