import styled from 'styled-components'

const Styles = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  h6 {
    font-size: 13px;
    color: var(--grey-4)
  }

  @media (min-width: 1185px) {
  margin-left: -4rem;
}
  ${'' /* calendar */}
  .react-calendar {
  width: 300px;
  max-width: 100%;
  background: var(--grey-1);
  border: 2px solid var(--grey-2);
  border-radius: 15px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;
  letter-spacing: var(--letterSpacing);
  overflow: hidden;
}

@media (min-width: 768px) {
  .react-calendar {
    width: 350px;
    }
  }

.react-calendar--doubleView {
  width: 700px;
}

.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}

.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}

.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
  background-color: var(--grey-05);
}

.react-calendar button:enabled:hover {
  cursor: pointer;
}

.react-calendar__navigation {
  display: flex;
  height: 40px;
  margin-bottom: 1em;
}

.react-calendar__navigation button {
  background-color: var(--grey-3);
  border-radius: 15px;
  min-width: 44px;
  background: none;
}

.react-calendar__navigation button:disabled {

}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: #BCD2F7;
}

.react-calendar__month-view__weekdays {
  color: var(--grey-5);
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75em;
  text-decoration:underline; 
  text-underline-offset: 2px;
}

.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}

.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: bold;
}

.react-calendar__month-view__days__day--weekend {
  color: #00d12d;
}

.react-calendar__month-view__days__day--neighboringMonth {
  color: #00d12d;
}

.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}

.react-calendar__tile {
  max-width: 100%;
  padding: 10px 6.6667px;
  background: none;
  text-align: center;
  line-height: 16px;
}

.react-calendar__tile:disabled {
  background-color: var(--grey-1);
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
}

.react-calendar__tile--now {
  background: #ffff76;
}

.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #ffffa9;
}

.react-calendar__tile--hasActive {
  background: #76baff;
}

.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}

.react-calendar__tile--active {
  font-weight: bold;
  color: var(--grey-05);
}

.react-calendar__tile--active:enabled {
  background: var(--primary-3);
}

.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: var(--primary-3);
}

.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
`
export default Styles
