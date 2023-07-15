import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--grey-05);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--box-shadow);
  h3 {
    margin-top: 0;
  }
  ${'' /* .btn {
    background: var(--secondary-5);
  } */}
  .btn:disabled {
    background: var(--grey-4);
    cursor: default;
  }
  .form {
    background: var(--grey-05);
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
    padding-top: 10px;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
    background: var(--secondary-5);
  }
  .icon-row {
    ${'' /* display: flex; */}
  }
  .icon-row h3 {
    padding-bottom: 10px;
  }
  .skill-icon{
    display: inline-block;
    font-size: 1.32rem;
    border-radius: var(--border-radius);
    margin-right: 3px;
    margin-bottom: 3px;
    background: var(--grey-1);
    padding: 8px;
    transition: var(--transition);
  }
  .skill-icon:hover {
    outline: black .5px solid;
    box-shadow: var(--box-shadow);
  }
  .skill-icon.active {
    outline: black .5px solid;
    box-shadow: var(--box-shadow);
    background: var(--secondary-1);
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-5);
  }
  .clear-btn:hover {
    background: var(--grey-7);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
    .icon-row{
    padding-top: 40px;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper
