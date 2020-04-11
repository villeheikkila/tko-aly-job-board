import { NextPage } from 'next';
import { Layout, JobCard } from '../components';
import withApollo from '../apollo/apollo';
import { useQuery, gql } from '@apollo/client';

const JOBS_QUERY = gql`
    {
        jobs {
            id
            title
            description
            company {
                name
            }
        }
    }
`;

interface Job {
    id: string;
    description: string;
    title: string;
    company: {
        name: string;
    };
}

const JobBoard: NextPage = () => {
    const { loading, data, error } = useQuery(JOBS_QUERY);
    console.log('error: ', error);
    console.log('data: ', data);

    if (loading || !data) {
        return <h1>loading...</h1>;
    }

    return (
        <Layout title="TKO-äly">
            {data.jobs.map(({ id, ...rest }: Job) => (
                <JobCard key={id} {...rest} />
            ))}
        </Layout>
    );
};

export default withApollo(JobBoard);
