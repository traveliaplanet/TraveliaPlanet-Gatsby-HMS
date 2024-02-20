import { graphql, useStaticQuery } from 'gatsby';

const useTestimonialData = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiTestimonial {
        nodes {
          name
          designation
          quote
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  return data.allStrapiTestimonial.nodes;
};

export default useTestimonialData;
