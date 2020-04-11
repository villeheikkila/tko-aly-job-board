import { NextPage } from 'next';
import { Layout, JobCard } from '../components';
import { useQuery, gql } from '@apollo/client';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const JOBS_QUERY = gql`
    {
        jobs {
            id
            title
            description
            synopsis
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
    tags: {
        tag: string;
    };
    company: {
        name: string;
    };
}

const JobBoard: NextPage = () => {
    const { data } = useQuery(JOBS_QUERY);

    return (
        <Layout title="TKO-äly">
            <div className="flex flex-col">
                {data?.jobs.map(({ id, ...rest }: Job) => (
                    <div className="p-2">
                        <JobCard key={id} {...rest} />
                    </div>
                )) || null}
            </div>
        </Layout>
    );
};

export default JobBoard;
