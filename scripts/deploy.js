// Pastikan semua package sudah diinstall
const hre = require("hardhat");
const fs = require("fs");
const chalk = require("chalk"); // Pastikan package ini terinstall
require("dotenv").config();

// ======================== BANNER ========================
function showBanner() {
  console.log(chalk.blue.bold("=============================================="));
  console.log(chalk.blue.bold("🚀  Token Deployment Script By SOUIY "));
  console.log(chalk.blue.bold("📌  Network: Pharos FOLLOW TIKTOK @Souiy1 "));
  console.log(chalk.blue.bold("=============================================="));
}

// ======================== MAIN FUNCTION ========================
async function main() {
  showBanner();

  try {
    // Validasi environment variables
    if (!process.env.PRIVATE_KEY) {
      throw new Error("PRIVATE_KEY tidak ditemukan di .env file");
    }

    const [deployer] = await hre.ethers.getSigners();
    console.log(chalk.green(`👤 Akun Deployer: ${deployer.address}`));

    const jumlahDeploy = parseInt(process.env.JUMLAH_DEPLOY) || 1;
    const supply = process.env.SUPPLY || "1000";

    console.log(chalk.yellow(`\n📌 Mulai deploy ${jumlahDeploy} kontrak...`));
    console.log(chalk.yellow(`🔢 Supply per kontrak: ${supply} LIT`));

    const results = [];

    for (let i = 0; i < jumlahDeploy; i++) {
      console.log(chalk.blue(`\n🚀 [${i + 1}/${jumlahDeploy}] Deploying...`));

      try {
        const Token = await hre.ethers.getContractFactory("Token");
        const token = await Token.deploy(ethers.parseEther(supply));
        await token.waitForDeployment();

        console.log(chalk.green(`✅ Sukses!`));
        console.log(chalk.cyan(`Alamat: ${token.target}`));
        console.log(chalk.cyan(`Tx Hash: ${token.deploymentTransaction().hash}`));

        results.push({
          id: i + 1,
          address: token.target,
          txHash: token.deploymentTransaction().hash,
          supply: supply
        });

        // Delay antar deploy
        if (i < jumlahDeploy - 1) await new Promise(r => setTimeout(r, 3000));
        
      } catch (error) {
        console.log(chalk.red(`❌ Gagal deploy ${i + 1}: ${error.message}`));
        continue;
      }
    }

    fs.writeFileSync("deploy-results.json", JSON.stringify(results, null, 2));
    console.log(chalk.green("\n📁 Hasil deploy disimpan di 'deploy-results.json'"));

  } catch (error) {
    console.error(chalk.red("❌ Error utama:"), error.message);
    process.exit(1);
  }
}

main();
