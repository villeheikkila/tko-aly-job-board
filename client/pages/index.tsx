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
    const { data, error } = useQuery(JOBS_QUERY);
    console.log('error: ', error);
    console.log('data: ', data);

    return (
        <Layout title="TKO-äly">
            <div className="">
                {data?.jobs.map(({ id, ...rest }: Job) => (
                    <div className="p-2">
                        <JobCard key={id} {...rest} />
                    </div>
                )) || <h1>Loading</h1>}
            </div>
        </Layout>
    );
};

export default withApollo(JobBoard);
