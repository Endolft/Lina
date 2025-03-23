// Crea el provider y pide permiso al usuario para acceder a la cuenta
await window.ethereum.request({ method: "eth_requestAccounts" });
const provider = new ethers.BrowserProvider(window.ethereum);

// Extrae el signer (la cuenta actualmente conectada en MetaMask)
const signer = await provider.getSigner();
