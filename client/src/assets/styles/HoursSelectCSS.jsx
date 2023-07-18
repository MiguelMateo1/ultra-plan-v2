import styled from 'styled-components'

const Styles = styled.section`
  display: grid;
  justify-content: center;
  ${'' /* align-items: center; */}
  gap: 2rem 0;
  .btn {
    padding: 10px 0;
    width: 310px;
    margin-top: 5px;
    margin: 0 auto;
    background-color: var(--primary-3);
    text-transform: capitalize;
  }
`

export default Styles
