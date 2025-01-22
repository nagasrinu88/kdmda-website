"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Doners() {

    useEffect(() => {
        fetch('https://playground.mockoon.com/users')
            .then(response => response.json())
            .then(data => setDoners(data))
            .catch(error => console.error('Error fetching doners:', error));
    }, []);

    const [doners, setDoners] = useState([]);

    return (
        <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Data Table</h1>

                {/* Table Container with horizontal scroll for mobile */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 shadow-sm rounded-lg">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                            {doners.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}