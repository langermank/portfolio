/* eslint-disable react/jsx-filename-extension */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/header.module.scss';

const Header = () => (
	<header className={styles.navIconFlex}>
		<Link to="/" className={styles.kLink}>
			<svg xmlns="http://www.w3.org/2000/svg" width="45" height="49" viewBox="0 0 35.853 41"><title>Katie Langerman</title><path d="M35.853,41H22.334L10.768,26.712V41H0V0H10.768V24.05l10.56-13.164h12.78L22.334,24.937Z"/></svg>
		</Link>
		<span className={styles.navLinks}>
			<a href="mailto:langermank@gmail.com" alt="email katie">
				langermank@gmail.com
			</a>
			<ul>
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
