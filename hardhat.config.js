require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    // Konfigurasi untuk jaringan Pharos
    Pharos: {
      url: process.env.PHAROS_RPC_URL || "https://testnet.dplabs-internal.com", // Ganti dengan RPC Pharos yang valid
      accounts: [
        process.env.PRIVATE_KEY // Pastikan private key diawali 0x dan 64 karakter
      ],
      chainId: 688688, // Chain ID Pharos (cek di https://chainlist.org)
    },
    // Tambahkan jaringan lain jika perlu (Sepolia, dll)
  }
};