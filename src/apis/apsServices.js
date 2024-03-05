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
//             Authorization: `Basic cnF6U3ZwblZzU0cyVWlIRGZOMWVVQXlVazM3b3gwd3Y6dTNNYzhCSG9QWU1GVjlyRw==`,
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

const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJhY2NvdW50OnJlYWQiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoicnF6U3ZwblZzU0cyVWlIRGZOMWVVQXlVazM3b3gwd3YiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJEdmF1YVdXUkxaYWlPeFozc0Q3WjBtSWp4UVF5OFFjSHA2em1zcjJ2a2RYRTRmcWxDVHFta2NtSmVWRVRFaWt4IiwiZXhwIjoxNzA5NjQ3MjE5fQ.jtdwimyN5yhw-c2xXRO6AyBI2A4NohwEa14a6sJY5ZDAglwug3w0cSTowFZxNcdEzuPCDYmVzoDDgyFYBtZd24JPuD-R5yLxd2Hh3Mmagjf2ZEXBvlzV_92rNHyQXhjVp9RiJPwg2IWAEoDyEmtmBv-trh1TIQ5npV0B1GubTNaIdH8i1ylarlgsq4k8HpizSE73VAmYpcV8D-na2WSZGUsxK9qLICwuERKfq_TXnFKqSqk0DNcgtempWknv6VLxSDw3rVZMetgmsFgbindiReHZxttU_0fgR1QiieQC1KcZSqWG-8SsBGw7_YFdo-us53Blwj3KKyKYEIY1T8TG2w';
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

