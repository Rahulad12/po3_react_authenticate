const base_url = import.meta.env.VITE_BASE_URL;

const apiRequest = (method, url, data = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}` || ''
        }
    };

    // Add body only for non-GET requests
    if (method !== 'GET' && data) {
        options.body = JSON.stringify(data);
    }

    return fetch(`${base_url}/${url}`, options)

};

// Attach helper methods
export const api = {
    get: (url) => apiRequest('GET', url),
    post: (url, data) => apiRequest('POST', url, data),
    put: (url, data) => apiRequest('PUT', url, data),
    delete: (url) => apiRequest('DELETE', url)
};
