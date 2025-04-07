import fetch from 'node-fetch';

export const handler = async (event) => {
    const response = await fetch('https://api.github.com');
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!!',
            github_status: data
        })
    };
};
