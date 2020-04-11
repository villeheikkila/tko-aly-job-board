import Head from 'next/head';
import { Header, Footer } from '.';

interface Props {
    title?: string;
}

const Layout: React.FC<Props> = ({ children, title = 'TKO-äly' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="min-h-screen flex flex-col font-sans bg-night overflow-visible">
                <Header />
                <div id="content" className="flex-1 mx-auto p-8">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
