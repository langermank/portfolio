/* eslint-disable react/no-danger */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
import SEO from '../components/seo';
import styles from '../styles/home.module.scss';

const aboutme = 'Katie is a Senior UI/UX Engineer at <a href="https://careers.cargurus.com/">CarGurus</a> and a co-organizer of <a href="https://www.meetup.com/Ladies-That-UX-Boston/" alt="Ladies that UX Boston Meetup Group" target="_blank" rel="noopener noreferrer">Ladies that UX Boston</a>, a meetup group empowering women who work in design and technology. With a background in Graphic Design, she both designs and develops products that are performant and user friendly. She’s passionate about connecting engineering to design through the magic of CSS. Currently, shes nerding out over design systems and reusable components.';

const IndexPage = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className={styles.pageWrap}>
    <header>
      <h1>katie langerman</h1>
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
    <main>
      <SEO title="Home" />
      <div className={styles.aboutKatie}>
        <Image />
        <p dangerouslySetInnerHTML={{
          __html: aboutme,
        }}
        />
      </div>
      <div className={styles.moreThings} />
    </main>
    <footer>
      <Link to="page-2" alt="my scrap paper">
        Playground
      </Link>
    </footer>
  </div>
);

export default IndexPage;
