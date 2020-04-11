import React, { useState } from 'react';
const ReactMarkdown = require('react-markdown');
import { motion } from 'framer-motion';
interface Company {
    name: string;
    logo: {
        url: string;
    };
}

interface Props {
    id?: string;
    company: Company;
    synopsis: string;
    description: string;
    tags: any;
}

const Content: React.FC<{ description: string }> = ({ description }) => {
    return (
        <motion.div
            className="z-50"
            initial="collapsed"
            animate="open"
            variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { height: 0 },
            }}
            transition={{ duration: 1, ease: [0.063, 0.62, 0.23, 0.98] }}
        >
            <ReactMarkdown className="markdown">{description}</ReactMarkdown>
        </motion.div>
    );
};

const JobCard: React.FC<Props> = ({
    company,

    description,
    synopsis,
    tags,
}): JSX.Element => {
    console.log('company: ', company);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="max-w-5xl w-5xl rounded overflow-hidden shadow-lg p-6  bg-white"
            initial="collapsed"
            animate="open"
            variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { height: 0 },
            }}
            transition={{ duration: 1, ease: [0.063, 0.62, 0.23, 0.98] }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between">
                <div className="flex content-center">
                    <h3 className="font-bold text-xl pb-3 mr-4">
                        {company?.name}
                    </h3>
                    <div>
                        {tags &&
                            tags.map(({ tag }) => (
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    {tag}
                                </span>
                            ))}
                    </div>
                </div>
                {company?.logo[0] && (
                    <img
                        className="w-32"
                        src={`http://localhost:1337${company?.logo[0]?.url}`}
                    />
                )}
            </div>

            {isOpen ? (
                <Content description={description} />
            ) : (
                <motion.span className="mb-2">{synopsis}</motion.span>
            )}
        </motion.div>
    );
};

export default JobCard;
