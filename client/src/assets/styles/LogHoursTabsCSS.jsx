import styled from 'styled-components'

const Styles = styled.section`
margin-top: 1rem;
width: 100%;
max-width: 200opx;
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: 1fr;
grid-template-rows: min-content;
background-color: var(--grey-1);
border-radius: var(--border-radius);
box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 5px;
padding: 1rem;
  .box {
    border-radius: var(--border-radius);
    width: 90%;
    max-width: 340px;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .log-container {

  }
  h4 {
    text-align: center;
    padding-bottom: 1rem;
    font-weight: 600;
    color: var(--primary-3);
  }
  @media (min-width: 1185px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    gap: 0 1rem;
    .box {
      max-width: 540px;
    }
}
`
export default Styles
