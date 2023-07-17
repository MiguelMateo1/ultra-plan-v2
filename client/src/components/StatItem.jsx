import Styles from '../assets/styles/StatItemCSS';

const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Styles color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Styles>
  );
};
export default StatItem;
