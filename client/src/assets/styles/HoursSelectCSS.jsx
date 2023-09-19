import styled from 'styled-components'

const Styles = styled.section`
  display: grid;
  justify-content: center;
  ${'' /* align-items: center; */}
  gap: 2rem 0;
  padding-top: 6px;
  .btn {
    padding: 10px 0;
    width: 310px;
    margin: 0 auto;
    margin-top: -8px;
    background-color: var(--primary-3);
    text-transform: capitalize;
  }
  .btn:disabled {
    cursor: not-allowed;
    border: none;
    background-color: var(--grey-4);
  }
`

export default Styles
