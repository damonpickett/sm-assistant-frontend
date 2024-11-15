import React, { useState } from 'react';
import { addTextEntry } from './api';

const TextInput = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTextEntry(title, content);
            setMessage('Text entry added successfully!');
            setTitle('');
            setContent('');
        } catch (error) {
            setMessage('Error adding text entry');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Add New Text Entry</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Entry</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default TextInput;
