import { Layout } from '../../components';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const JOBS_ID_QUERY = gql`
    query JobIdQuery($id: ID!) {
        job(id: $id) {
            id
            title
            description
            company {
                name
            }
        }
    }
`;

const Job = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useQuery(JOBS_ID_QUERY, { variables: { id } });

    return (
        <Layout>
            <h1>{data?.job.title}</h1>
            <p>{data?.job.description}</p>
        </Layout>
    );
};

export default Job;
