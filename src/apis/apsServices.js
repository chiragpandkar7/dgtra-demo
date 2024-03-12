import axios from 'axios'

// export const getAccessToken = async () => {
//     const apiUrl = 'https://developer.api.autodesk.com/authentication/v2/token'; 
//     try {
//       const response = await axios.post(
//         apiUrl,
//         new URLSearchParams({
//           grant_type: 'client_credentials',
//           scope: 'data:read',
//         }),
//         {
//           headers: {
//             Authorization: ``,
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//       );
  
//       const accessToken = response.data.access_token;
  
  
//       return accessToken;
//     } catch (error) {
//       console.error('Error refreshing token:', error);
//       throw error; 
//     }
// };

const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJkYXRhOnJlYWQiLCJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJhY2NvdW50OndyaXRlIiwiYWNjb3VudDpyZWFkIl0sImNsaWVudF9pZCI6InJxelN2cG5Wc1NHMlVpSERmTjFlVUF5VWszN294MHd2IiwiaXNzIjoiaHR0cHM6Ly9kZXZlbG9wZXIuYXBpLmF1dG9kZXNrLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tIiwianRpIjoiZmxuYURjcGpxN0hyMVBvaDBlMU84T1U1S3d1S0d5dzRRZVJ6MXd0UGxCNUJRVmFid0Q0QWYyOHJhTUhQWnRUOCIsImV4cCI6MTcxMDIzMDUxNCwidXNlcmlkIjoiUkFIMkRBM05LRFE4NExDQiJ9.F5eardC_ghOYhZkiWyq4AmYq1pLqRuQpOON2cP1k_ZQiFyK6dPI0jSh6SENhvjHZS5-XLNrPYcyyMDBG7HG1ZV3oJmEVvUe3dwoH7O--nB80-EOrWmFIuKWsWsZJXByyqiy6XBXqVpI5C16GHMLMcKGhigaUIaej7MepMJW0CZQy1CvdIQCjV6W9qTCZRmcgKeNPzuC-5rEkhu-aTJikNiLIwMSLyuQ0pwVQ_QYplureUuWZpadPcLjN6MuskqfsaliGvSh2FVnfsC03PI4yIVu5pUf6WoIYnayRekuW_35vHpUshpdBtQCHUa9cFlkLx0Jcqi8lasg9w0W-n5VdNg';
const accountId = '59b4539d-c418-4d78-b0e6-308bd58fd54d';

export const getProjects = async () => {
    const apiUrl = `https://developer.api.autodesk.com/construction/admin/v1/accounts/${accountId}/projects`;

    const response = await axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response;
}

export const getMembers =  async (projectId) => {
    const apiUrl = `https://developer.api.autodesk.com/construction/admin/v1/projects/${projectId}/users`;

    const response = await axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response;
}

export const getPermissions = async (projectId, memberId) => {
    const apiUrl = `https://developer.api.autodesk.com/construction/admin/v1/projects/${projectId}/users/${memberId}`;

    const response = await axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response;
}

