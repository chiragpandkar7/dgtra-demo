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

const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJhY2NvdW50OnJlYWQiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoicnF6U3ZwblZzU0cyVWlIRGZOMWVVQXlVazM3b3gwd3YiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJmaG9zdnZ0S0cyb2hxcG4yOVo2UDZ0Um9ib3N2aXFER2RMaHl3NkFmcmhpVWVlUHJHZkZFMVlkWUF1VW9NdmpzIiwiZXhwIjoxNzA5NzMxMTQ1fQ.lxr1ZC_mOwS5NU9ZmoLnAPXvWFQn1WLmjhYc7p7GC2csNt84zjUBMwAS9VMSLuDnE3neAKz_5PNphaaXIAQHE8yYAflgZZhn7glpExzTJ35et9F0HzouNpS2Tmqdb2uPGD8n3Y1YBwUbsXd2r10mgXx3CSC2lXFD1nUocZLyg3CBMUj7ccgh_y5XQlp-xCIgmL919Xvu6g36JCO-9LgrPHK-3llZk4EF0zDdtp3qWjT23XyYCRWfeAod0Km3OjwFokuH8c4xqYcUwV3fSA2teotTj_niV1zFOU2VC9JJRRqgj1MuEM0V8ubDSX1gwsgxEEnGx9o7wDeIjXgTzzjoYg';
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

