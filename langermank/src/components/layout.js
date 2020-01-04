import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../styles/layout.module.scss';
import Header from './header';
import Footer from './footer';
import "../../static/fonts/fonts.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.pageWrap}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
