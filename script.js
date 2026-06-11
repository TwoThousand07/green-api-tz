const BASE_URL = 'https://api.green-api.com';

function getCredentials() {
    const id = document.getElementById('idInstance').value.trim();
    const token = document.getElementById('apiToken').value.trim();
    return { id, token }; 
}

async function getSettings() {
    const { id, token } = getCredentials();
    const res = await fetch(`${BASE_URL}/waInstance${id}/getSettings/${token}`);
    const data = await res.json();
    document.getElementById('response').value = JSON.stringify(data, null, 2);
}

async function getStateInstance() {
    const { id, token } = getCredentials();
    const res = await fetch(`${BASE_URL}/waInstance${id}/getStateInstance/${token}`);
    const data = await res.json();
    document.getElementById('response').value = JSON.stringify(data, null, 2);
}
