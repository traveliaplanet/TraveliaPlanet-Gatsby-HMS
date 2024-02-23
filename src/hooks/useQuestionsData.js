import { graphql, useStaticQuery } from 'gatsby';

const useQuestionsData = () => {
const data = useStaticQuery(graphql`
    query {
      allDatoCmsFaq(sort: { meta: { updatedAt: DESC } }) {
        nodes {
          answer
          question
        }
      }
    }
  `);
  return data.allDatoCmsFaq.nodes;
};
export default useQuestionsData