import React, { useState } from 'react';
const ReactMarkdown = require('react-markdown');
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface Company {
    name: string;
    logo: {
        url: string;
    }[];
}

interface Props {
    id?: string;
    company: Company;
    synopsis: string;
    description: string;
    tags: any;
    deadline: string;
}

const Content: React.FC<{ description: string }> = ({ description }) => {
    return (
        <div className="z-50">
            <ReactMarkdown className="markdown">{description}</ReactMarkdown>
        </div>
    );
};

const JobCard: React.FC<Props> = ({
    company,
    description,
    synopsis,
    tags,
    deadline,
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const formattedDateTime = format(deadline, 'MM/DD/YYYY');

    return (
        <div
            className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
            onClick={() => setIsOpen(!isOpen)}
        >
            {company?.logo[0] && (
                <div className="flex justify-center md:justify-end -mt-12 ">
                    <img
                        className="w-26 h-20 object-cover rounded-t-lg border-2 bg-white border-transparent"
                        src={`http://localhost:1337${company?.logo[0]?.url}`}
                    />
                </div>
            )}

            <div className="flex justify-between">
                <div className="flex content-center">
                    <h3 className="text-2xl text-gray-700 font-bold hover:text-gray-600 mr-4">
                        {company?.name}
                    </h3>
                </div>

                <h1>Application deadline {formattedDateTime}</h1>
            </div>

            {isOpen ? (
                <Content description={description} />
            ) : (
                <motion.span className="mb-2">{synopsis}</motion.span>
            )}

            <div>
                {tags &&
                    tags.map(({ tag }: { tag: string }) => (
                        <span className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded mr-2">
                            {tag}
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default JobCard;
