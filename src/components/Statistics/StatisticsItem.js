import css from './Statistics.module.css';


function getRandomHexColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${r()},${r()},${r()})`;
}

export const StatisticsItem = ({ label, percentage }) => (
  <li
    className={css.item}
    style={{
      backgroundColor: getRandomHexColor(),
    }}
  >
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);
