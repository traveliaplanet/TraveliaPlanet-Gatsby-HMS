import { graphql, useStaticQuery } from 'gatsby';

const useTestimonialData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsTestimonial(sort: { meta: { updatedAt: ASC } }) {
        nodes {
          name
          designation
          quote
          image {
            gatsbyImageData
          }
        }
      }
    }
  `);
  return data.allDatoCmsTestimonial.nodes;
};

export default useTestimonialData;
