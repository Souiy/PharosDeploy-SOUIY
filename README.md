# Token Deployment Script by SOUIY

### Script untuk melakukan deploy kontrak token ERC20 secara massal di jaringan Pharos. 

### Dibuat oleh SOUIY (TikTok: @Souiy1).

---

## 📋 Prasyarat

>Sebelum menjalankan script ini, pastikan Anda telah menginstall:

> Node.js (versi 16 atau lebih baru)

>npm atau yarn

>Git

---

## 🛠️ Instalasi

### 1. Clone Repository
```

git clone https://github.com/Souiy/PharosDeploy-SOUIY.git

cd PharosDeploy-SOUIY
```

---

### 2. Install Dependencies
```
npm install

 atau

yarn install
```

---

### 3. Konfigurasi Environment
Buat file .env di root direktori project dengan konten berikut:
```
nano .env
```
PRIVATE_KEY="your_private_key_here"

JUMLAH_DEPLOY=5

SUPPLY="1000"

### Penjelasan variabel:

> PRIVATE_KEY: Private key wallet Anda (tanpa 0x di depan)

> JUMLAH_DEPLOY: Jumlah kontrak yang akan dideploy (default: 1)

> SUPPLY: Jumlah supply token per kontrak (default: "1000")

---

### 📜 File Kontrak Token dan deploloy.js
> Pastikan Anda memiliki file kontrak Token di direktori contracts/. Contoh kontrak ERC20 dasar:

 buat file kontrak Token
```
mkdir contracts
cd contracts
nano Token.sol
```
```
solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("Lombok Island Token", "LIT") {
        _mint(msg.sender, initialSupply);
    }
}
```


---
#### Penjelasan parameter:
```
cd ..
 npx hardhat run scripts/deploy.js --network Pharos
```



--network pharos: Menentukan jaringan yang digunakan (sesuaikan dengan config Hardhat)

---

### 📊 Output
> Setelah deploy selesai, script akan menghasilkan:

> Log di console untuk setiap kontrak yang dideploy

> File deploy-results.json yang berisi detail semua kontrak yang berhasil dideploy



#### Contoh output file:
```
json

[

  {
    "id": 1,
    
    "address": "0x123...abc",
    
    "txHash": "0x456...def",
    
    "supply": "1000"
  },
  
  {
  
    "id": 2,
    
    "address": "0x789...ghi",
    
    "txHash": "0x012...jkl",
    
    "supply": "1000"
  
  }

]
```
---

### ⚠️ Catatan Penting
> Jangan pernah share file .env atau private key Anda

> Pastikan Anda memiliki cukup gas di jaringan target

> Script ini memiliki delay 3 detik antar deploy untuk menghindari nonce conflict

> Untuk jaringan selain Pharos, sesuaikan config Hardhat di hardhat.config.js

---

### 📞 Kontak
Untuk pertanyaan atau dukungan:

#### TikTok: @Souiy1

#### syeikhbelang@gmail.com

Dibuat dengan ❤️ oleh SOUIY - 2025
---
