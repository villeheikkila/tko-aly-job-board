import { NextPage } from 'next';
import { Layout } from '../components';
import withApollo from '../apollo/apollo';

const Index: NextPage = () => {
    return (
        <Layout title="TKO-äly">
            <h1>Placeholder</h1>
        </Layout>
    );
};

export default withApollo(Index);
