
import React from 'react';
import { Link } from 'gatsby';

export default function BlogExcerpt({
  author,
  slug,
  description,
  title,
  date,
}) {
  return (
    <article key={slug}>
      <h3>
        <Link to={slug}>
          {title}
        </Link>
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <div>
        <p>{author}</p>
        <time>{date}</time>
      </div>
    </article>
  );
}
