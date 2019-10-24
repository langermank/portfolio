import React from "react"
import styles from "../styles/devcanvas.module.scss"
import PropTypes from "prop-types"

const JobTitle = ({ designer, developer, uxDirector, nonIndustryFolk }) => (
  <div className={styles.pageWrap}>
    {designer (<section>
      <div className={styles.solidBox}>
        <h3>"Designer who codes"</h3>
        <h3>"UI Engineer with a background in design"</h3>
        <h3>"Hybrid UI/UX"</h3>
        <h3>"Design Technologist"</h3>
      </div>
    </section>)}
    {developer (<section>
      <div className={styles.solidBox}>
        <h3>"UI Engineer"</h3>
        <h3>"Front-end developer"</h3>
        <h3>"Front of the front-end developer"</h3>
        <h3>"HTML/CSS developer"</h3>
      </div>
    </section>)}
    {uxDirector (<section>
      <div className={styles.solidBox}>
        <h3>"UI/UX Engineer with a background in design"</h3>
        <h3>"Hybrid Front-end developer"</h3>
        <h3>"Design Technologist"</h3>
        <h3>"Front-end developer"</h3>
      </div>
    </section>)}
    {nonIndustryFolk (<section>
      <div className={styles.solidBox}>
        <h3>"Web Designer"</h3>
      </div>
    </section>)}
  </div>
);

JobTitle.defaultProps = {
  designer: PropTypes.bool.isRequired,
  developer: PropTypes.bool.isRequired,
  uxDirector: PropTypes.bool.isRequired,
  nonIndustryFolk: PropTypes.bool.isRequired
};

export default JobTitle;
