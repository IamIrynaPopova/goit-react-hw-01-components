import css from './Statistics.module.css';

export const StatisticsItem = ({ label, percentage }) => (
  <li className={css.item}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);
