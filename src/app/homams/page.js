import Link from 'next/link';

async function fetchHomams() {
    const host = process.env.HOST;
    const response = await fetch(`${host}/api/homams`);
    const homams = await response.json();
    return homams;
}

export const metadata = {
    title: 'Homams Page',
    description: 'View the list of homams performed at the temple.',
};

const HomamsPage = async () => {
    const data = await fetchHomams();

    return (
        <div className="mt-12 max-w-3xl mx-auto">
            <h1 className="font-bold py-4">
                ఓంశ్రీ మాత్రే నమః <br />
                ప్రతి నెల శ్రీ కానక దుర్గ మహాదేవియే ఆలయం నందు జరుగుచున్న హోమం యొక్క వివరాలు.</h1>
            <div className="table-container">
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th className="table-cell">Homam Name</th>
                            <th className="table-cell">Date & Time</th>
                            <th className="table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody className="table-divider">
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-yellow-50">
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
        </div>
    );

};

export default HomamsPage;