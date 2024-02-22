import React from 'react';

// Components
import Seo from 'components/SEO';

function NotFoundPage() {
  return (
    <>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
}

export function Head() {
  return <Seo title="404: Not Found" />;
}

export default NotFoundPage;
