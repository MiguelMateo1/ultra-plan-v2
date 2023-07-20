import styled from 'styled-components'

const Styles = styled.main`
  .landing-page {
    background-color: var(--primary-4);
    overflow-x: hidden;
    max-width: 100%;
    color: #fff;
    background-image: linear-gradient(
      140deg,
      hsl(247deg 68% 23%) 0%,
      hsl(219deg 100% 23%) 12%,
      hsl(213deg 100% 25%) 23%,
      hsl(208deg 100% 26%) 34%,
      hsl(201deg 100% 26%) 45%,
      hsl(194deg 100% 25%) 56%,
      hsl(185deg 100% 23%) 67%,
      hsl(176deg 100% 23%) 78%,
      hsl(166deg 71% 29%) 89%,
      hsl(144deg 30% 41%) 100%
    );
  }

  nav {
    width: 100%;
    margin-top: 5px;
    max-width: var(--max-width);
    height: 70px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
  }
  .logo {
    width: 60px;
    margin-left: 17px;
  }
  h3 {
    margin-left: -12px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .main-container {
    margin: 0 auto;
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    max-width: var(--max-width);
    text-align: start;
    position: relative;
  }

  .info {
    margin:  0 auto;
    margin-top: 7rem;
    padding: 20px 30px;
    max-width: 600px;
    z-index: 2;
  }
  h1 {
    font-weight: 600;
    span {
      color: var(--secondary-3);
    }
  }
  .intro-text {
    color: var(--grey-1);
  }
  .main-img {
    margin: 0 auto;
    max-width: 250px;
    margin-bottom: 2rem;
    z-index: 2;
  }
  .btn {
    color:  var(--secondary-2);
    background-color: var(--primary-6);
    padding: 10px 20px;
    font-size: 1.2rem;
  }
  .btn:hover {
    background-color: var(--primary-4);
  }

  .circles {
    position: absolute;
    top: 28%;
    left: 100px;
    width: 100%;
    max-width: 900px;
  }

  .circle-3 {
    position: absolute;
    left: 300px;
    bottom: 105px;
    width: 80px;
  }

  .circle-2 {
    position: absolute;
    top: 100px;
    right: -50px;
    width: 100px;
  }

  .circle-1 {
    position: absolute;
    left: 80px;
    bottom: -75px;
    width: 120px;
  }

  @media (min-width: 850px) {
    .main-container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      column-gap: 3rem;
    }
    .info {
      margin-top: 0;
    }
    .main-img {
      max-width: 500px;
      padding-right: 3rem;
    }
    .circles {
     width: 70%
  }
  .circle-3 {
    left: 210px;
    bottom: 65px;
  }
  }
`
export default Styles;
