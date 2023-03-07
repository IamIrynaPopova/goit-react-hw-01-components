import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className= {css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
                        key={id}
            label={label}
            percentage={percentage}
          ></StatisticsItem>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
