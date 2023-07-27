import styled from 'styled-components'

const Styles = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  @media (min-width: 576px) {
      margin-bottom: .7rem;
  }

  h6 {
    font-size: .8rem;
    padding: 0px 10px;
    border-radius: var(--border-radius);
    background-color: var(--grey-1);
    color: var(--grey-5);
    position: absolute;
    left: 30px;
    top: -18px;
  }
  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-4);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    color: var(--grey-7);
  }
`
export default Styles
