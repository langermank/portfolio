import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/footer.module.scss';

const Footer = () => (
	<footer>
		<p>Katie Langerman</p>
		<ul className={styles.navLinksWrap}>
			<li>
				<a href="mailto:langermank@gmail.com" alt="email katie">
					langermank@gmail.com
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/langermank/"
					alt="linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/KatieLangerman"
					alt="twitter"
					target="_blank"
					rel="noopener noreferrer"
				>
					twitter
				</a>
			</li>
			<li>
				<a href="https://github.com/langermank" alt="github" target="_blank" rel="noopener noreferrer">
					github
				</a>
			</li>
			<li>
				<a
					href="https://dribbble.com/katielangerman"
					target="_blank"
					rel="noopener noreferrer"
					alt="dribbble"
				>
					dribbble
				</a>
			</li>
		</ul>
	</footer>
);

Footer.propTypes = {
	siteTitle: PropTypes.string,
};

Footer.defaultProps = {
	siteTitle: '',
};

export default Footer;
