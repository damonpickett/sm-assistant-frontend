import React from 'react';

const PostGenerator = () => {
    const handleGeneratePost = () => {
        console.log('Generate post feature coming soon!');
    };

    return (
        <div>
            <button onClick={handleGeneratePost}>Generate Social Media Post</button>
        </div>
    );
};

export default PostGenerator;
