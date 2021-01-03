import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default withApollo(
    ({ initialState }) => {
        return new ApolloClient({
            uri: process.env.srapiURI,
            headers: {
                Authorization: `Bearer ${process.env.strapiAPIToken}`,
            },
            cache: new InMemoryCache().restore(initialState || {}),
        });
    },
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        },
    },
);
