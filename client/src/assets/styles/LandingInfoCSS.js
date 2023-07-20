import styled from 'styled-components'

const Styles = styled.section`

.container {
  background-color: #ffffff;
  color: var(--grey-7);
  position: relative;
  padding-bottom: 4rem;
  z-index: 2;
}

.title-area {
  position: relative;
  h2 {
    text-align: center;
    padding: 60px;
    font-weight: 600;
  }
}

.study-img {
  width: 40%;
  max-width: 560px;
  position: absolute;
  bottom: -20px;
  right: 20px;
}

.description-area {
  max-width: var(--max-width);
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 0 auto;
}

.description-area div {
  margin: 0 auto;
  padding: 30px;
  padding-top: 50px;
  border-radius: var(--border-radius);
  box-shadow: var( --box-shadow);
  max-width: 430px;
  transition: 0.2s ease-in-out all;
  position: relative;
}

.description-area div:hover {
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  max-width: 430px;
}

p {
  color: var( --grey-4);
}

.desc-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  margin-left: 75%;
  color: var(--secondary-2);
}

.footer-container {
  background-color: #edf1f7;
  height: 500px;
  position: relative;
}

.footer-img {
  background-image: url(src/assets/images/landingPage/footer-img-1.png);
  height: 350px;
  width: 1100px;
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%);
  background-repeat: no-repeat;
}

.footer-icon {
  width: 105px;
  position: absolute;
  left: -5%;
  bottom: 26px;
  animation: footerAnimationMobile 19s linear infinite;
}

.footer-icon-2 {
  width: 135px;
  position: absolute;
  left: -5%;
  bottom: 0px;
  animation: footerAnimationMobile 27s linear infinite 1s;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  place-items: center;
  column-gap: 5rem;
  color: var(--grey-7);
  padding-top: 20px;
}

.footer-end {
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
  padding-bottom: 55px;
  color: var(--grey-7);
  max-width: var(--max-width);
  p {
    padding-left: 50px;
  }
}

.logo-area {
  h4 {
    margin-top: 20px;
  }
}

.social-links {
  grid-row: 2/3;
  grid-column: 1/3;
  z-index: 2;
}

.footer-btn {
  border: 1px solid var(--grey-3);
  background-color: var(--grey-2);
  color: var(--primary-2);
  border-radius: 450px;
  grid-row: 1/2;
  grid-column: 2/3;
  margin-right: 1rem;
  padding: 4px 10px;
  transition: 0.2s ease-in-out all;
  font-size: 1.5rem;
}

.footer-btn:hover {
  background-color: var(--primary-3);
  color: #fff;
}

.social-icon {
  border: 1px solid var(--grey-3);
  color:  var(--grey-3);
  font-size: 1.7rem;
  border-radius: 50px;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: var(--transition);
}

.social-icon:hover {
  border: 1px solid var(--grey-4);
  color:  var(--grey-4);
}

  @media (min-width: 850px) {
    .description-area {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }
    .footer-img {
      width: 1000px;
    }
    .footer-icon {
      width: 105px;
      left: -70%;
      animation: footerAnimation 20s linear infinite;
    }

    .footer-icon-2 {
      width: 135px;
      position: absolute;
      left: -70%;
      bottom: 0px;
      animation: footerAnimation 24s linear infinite 2s;
    }
  }

  @keyframes footerAnimation {
    from {left: -70%;};
    to {left: 170%;}
  }
  @keyframes footerAnimationMobile {
    from {left: -20%;};
    to {left: 120%;}
  }
`
export default Styles;
