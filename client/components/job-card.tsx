import React from 'react';
const ReactMarkdown = require('react-markdown');
interface Company {
    name: string;
}

interface Props {
    id?: string;
    company: Company;
    description: string;
}

const JobCard: React.FC<Props> = ({ company, description }): JSX.Element => {
    console.log('description: ', description);

    return (
        <div className="max-w-6xl rounded overflow-hidden shadow-lg p-8 bg-gray-100">
            <div className="font-bold text-xl mb-2"> {company?.name}</div>

            <div className="text-gray-700 text-base">
                <ReactMarkdown source={description} escapeHtml={false} />
            </div>

            <div className="px-6 py-4">
                {['moi', 'hei', 'hoi'].map((e) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {e}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;
