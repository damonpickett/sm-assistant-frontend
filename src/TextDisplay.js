import React, { useEffect, useState } from 'react';
import { getTextEntries } from './api';

const TextDisplay = () => {
    const [entries, setEntries] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await getTextEntries();
                setEntries(response.data);
            } catch (error) {
                setError('Failed to fetch entries');
                console.error(error);
            }
        };
        fetchEntries();
    }, []);

    return (
        <div>
            <h2>Saved Text Entries</h2>
            {error && <p>{error}</p>}
            {entries.length ? (
                <ul>
                    {entries.map((entry) => (
                        <li key={entry.id}>
                            <strong>{entry.title}</strong>
                            <p>{entry.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No entries found.</p>
            )}
        </div>
    );
};

export default TextDisplay;
