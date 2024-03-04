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

const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJhY2NvdW50OnJlYWQiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoicnF6U3ZwblZzU0cyVWlIRGZOMWVVQXlVazM3b3gwd3YiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJrak1aWFNvY24wMXJaR1lHQVMxRkpoeUhVZnJDZ0lsODdMdnRlSEo5NENOWkt2UEczQVcwdEZ3U3pka2ZpZFlOIiwiZXhwIjoxNzA5NTU1NDcxfQ.LOVlx62togAsN-Uk8Lv0gvIMY-gEKz2lTPiVxs4-BpZlVXJBDKNTV_EltUJdaTXRkOnt50Jmyi3_79_MP5I_pN5LesExjjYL_hTPCIXzUJ7fRXn6SCj65JOcko0THtIbH2RfEmhg7yyPX-MnY7oBCPIq5HdYUI3oD6cLX0tf93oIxwp4zN1qtnZ1VY_yp59bXjFghQIZ0krMfoAMQ094dM9dx-xWphFsG5yxG2eiqU3SIvpGLvPnLCPrWM20PPBEUP9BeJU1PAVoQFEMBOfhTUjSpsCrjghe9Jmz7KehzfAwPXAf_cN-qpRUIjPZ62AakiMggiYSvRJZLG2XeIX_qw';
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

