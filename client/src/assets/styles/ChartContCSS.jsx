import styled from 'styled-components'

const Styles = styled.section`
  padding: 4rem 0;
  text-align: center;
  position: relative;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-3);
    font-size: 1.25rem;
    cursor: pointer;
  }
  .reset-chart {
    position: absolute;
    bottom: 0px;
    right: 5px;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
  .btn {
    color: darkred;
    font-size: .9rem;
    padding: 1px 4px;
  }
  .confirm-text {
    margin-left: 15px;
    color: red;
    background: red;
  }
`

export default Styles
