import axios from 'axios'

const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJhY2NvdW50OnJlYWQiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoicnF6U3ZwblZzU0cyVWlIRGZOMWVVQXlVazM3b3gwd3YiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJsdVhFSnNYSzQ4M2VvTHF4SHhZamRLRmVjaHp6NW9zbjBtYmF2aUsxbENWdnFaMkx2TEh6ZmhkVVFjVjh1NFhPIiwiZXhwIjoxNzA5Mjk4MjA3fQ.JMMFeJXq1OEKYrowD0Lf9VnXQjvQ-hTlrUjh4XGMIjY7lMT88EijaOCDjo3AXhvdpgo5BCTQ3AXEVvN13yatbA7ufjkJ00Y9jH27itppE7yqKgjyiavu81Py2kop3VCGCfZ2ag4cum1ZB1WycJXGk0wd5MZk3zPx9Sx5Rlnvpx6FfVnbNyLnW-7XOXpQMN-Pire4z3JYtovZ1bUzmxHhOZ02_VGeolJOXEYl6riwNISd1wEl7-O1wRFL1SSH9WoR_8ACZ_ZlkQJtv7gsyKgKv5T4DQe4ZJLHftmlSVtSr2cMVlcVj5LkciGa28ZIdGCfVITGvtHll_vMM65_i4Ilag';
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