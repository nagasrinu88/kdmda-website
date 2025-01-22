"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomamsPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/homams');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Homams performed at alayam</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Homam Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.displayName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                                <Link href={`/homams/${item.id}`}>
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default HomamsPage;