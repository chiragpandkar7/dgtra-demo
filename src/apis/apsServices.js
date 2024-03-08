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

const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJkYXRhOnJlYWQiLCJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJhY2NvdW50OndyaXRlIiwiYWNjb3VudDpyZWFkIl0sImNsaWVudF9pZCI6InJxelN2cG5Wc1NHMlVpSERmTjFlVUF5VWszN294MHd2IiwiaXNzIjoiaHR0cHM6Ly9kZXZlbG9wZXIuYXBpLmF1dG9kZXNrLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tIiwianRpIjoiRnBiS0lyVm5EdXlXMlRKVlI5allrNFdraGd3YUpaVkl5SGRvMnM1SVVaRE93ajZOejYxa2o3eE9hd2E5WE9ZNyIsImV4cCI6MTcwOTkwNTk3NSwidXNlcmlkIjoiUkFIMkRBM05LRFE4NExDQiJ9.INbtmph6O4mMsbAxP6hejNib8nF1iql5jGVJ0Qv3H_ORoi8ulE8FAjNdVHD0nUuQy1F2-W4Puk9RFPHfTrlC4q9qO6P0s6J3-q4dxe_JQQ5tseTy0amvhzwBxxV4HOpTdvnVnEH7Tis3LZ8dDXTPcuq_VK1fSHHeANVxu3ro09_0jYBdI4Zfd02nIZQ2pQjIjOHLb67FKQAy2iC3bCWRfcluo8co8X1a-IweBf202_Kb5VMyiP9U5npPoJbYGy4txKkjcKerh4qlID1XqiWHr8XUe6UHF2VR_fsCpMvafBJCJBTN1tvQbfgVB96BsihMB-d3r9PFyy5Fpqwvw6v4NA';
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

