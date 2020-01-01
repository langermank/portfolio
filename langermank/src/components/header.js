/* eslint-disable react/jsx-filename-extension */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/header.module.scss';

const Header = () => (
	<header>
		<span className={styles.navLinksWrap}>
			<a href="mailto:langermank@gmail.com" alt="email katie">
				langermank@gmail.com
			</a>
			<span className={styles.navLinks}>
				<a
					href="https://www.linkedin.com/in/langermank/"
					alt="linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin
				</a>
				<a
					href="https://twitter.com/KatieLangerman"
					alt="twitter"
					target="_blank"
					rel="noopener noreferrer"
				>
					twitter
				</a>
				<a href="https://github.com/langermank" alt="github" target="_blank" rel="noopener noreferrer">
					github
				</a>
				<a
					href="https://dribbble.com/katielangerman"
					target="_blank"
					rel="noopener noreferrer"
					alt="dribbble"
				>
					dribbble
				</a>
			</span>
		</span>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
