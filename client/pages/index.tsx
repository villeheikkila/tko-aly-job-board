import { NextPage } from 'next';
import { Layout, JobCard } from '../components';
import { useQuery, gql } from '@apollo/client';

const JOBS_QUERY = gql`
    {
        jobs {
            id
            title
            description
            synopsis
            deadline
            tags {
                tag
            }
            company {
                name
                logo {
                    url
                }
            }
        }
    }
`;

interface Job {
    id: string;
    description: string;
    synopsis: string;
    title: string;
    deadline: string;
    tags: {
        tag: string;
    };
    company: {
        name: string;
        logo: {
            url: string;
        }[];
    };
}

const JobBoard: NextPage = () => {
    const { data } = useQuery<any>(JOBS_QUERY);

    return (
        <Layout title="TKO-äly">
            <div className="flex flex-col">
                {data?.jobs.map(({ id, ...rest }: Job) => (
                    <div className="p-2" key={id}>
                        <JobCard {...rest} />
                    </div>
                )) || null}
            </div>
        </Layout>
    );
};

export default JobBoard;
