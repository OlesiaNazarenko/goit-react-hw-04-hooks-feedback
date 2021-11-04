import propTypes from "prop-types";
import s from 'components/section/Section.module.css'

export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
    
  );
}
Section.propTypes = {
  title: propTypes.string,
  children: propTypes.array,
};