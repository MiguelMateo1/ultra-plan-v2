import styled from 'styled-components'

const Styles = styled.section`
  padding: 4rem 0;
  text-align: center;
  position: relative;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--secondary-5);
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
    display: block;
  }
  .year-container {
    position: absolute;
    bottom: 30px;
    left: 50px;
  }
  h6 {
    font-size: .9rem;
    margin: 0;
    margin-right: 5px;
    text-decoration: underline; 
    cursor: pointer;
    display: inline-block;
    transition: var(--transition);
    color: var(--primary-2);
  }
  h6.active {
    font-size: 1rem;
    color: var(--primary-5);
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
