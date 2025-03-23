# Lina: Data-Driven Agriculture for a Smarter Future

Lina is a data-driven agricultural platform that empowers farmers with precise insights into their land, helping them optimize productivity, mitigate risks, and make informed decisions. Many farmers operate with limited knowledge about soil condition, water availability, and climate, resulting in inefficient resource use, lower yields, and financial instability. Without accurate, real-time data, they often rely on intuition, experience, or prohibitively expensive third-party assessments that are out of reach for small and medium-sized farms.

By bridging technology, agriculture, and finance, Lina addresses these pain points in an integrated and transparent manner, ensuring every farmer can access the resources and knowledge needed to thrive. Below is a comprehensive overview of how Lina works, the core problems it solves, the system architecture behind it, and how it can be seamlessly adapted to multiple blockchain networks—World Chain, Mantle Network, and ZKsync Era.

---

## 1. What is Lina?

Lina is a decentralized agricultural financing platform that combines advanced data analytics (AI, satellite imagery, oracles) with transparent, automated financial mechanisms. It connects investors and farmers through:

### Real-Time Farm Assessments
- Soil fertility, moisture levels, pest risks, climate data, and more.

### Equitable Financing Solutions
- Farmers can secure funds based on the true productivity of their farmland rather than traditional credit history.

### Liquidity and Fairness for Investors
- Capital is allocated efficiently, and investors can exit investments through a secondary market at any time.

Ultimately, Lina lowers barriers that keep small and medium-sized farmers from accessing capital, while providing investors with data-backed, secure opportunities in sustainable agriculture.

---

## 2. Why Do We Need Lina? (Key Problems)

### Limited Access to Agricultural Financing
- Farmers lacking collateral or credit history are often excluded from traditional lending.  
- Bureaucratic hurdles and high interest rates compound the issue.

### Insufficient Data for Risk Assessment
- Investors struggle to evaluate farmland objectively.  
- Without reliable soil and climate information, risk is often overpriced or misunderstood.

### High Costs of Technical Farm Assessments
- Soil analyses, climate reports, and oracles data can be expensive.  
- Many small and medium farms do not have the funds or scale to justify expert consulting.

### Low Liquidity in Traditional Agricultural Investments
- Agriculture usually requires long-term capital commitments.  
- Investors find it difficult to retrieve their funds on short notice.

### Technological Barriers to Crypto Adoption
- Most farmers are unfamiliar with blockchain or cryptocurrency.  
- High onboarding costs, complex user flows, and volatile fees discourage widespread participation.

---

## 3. How Lina Works in Detail

### 3.1 Data Analysis for Agriculture (AI, Satellites, Oracles)

**AI-Powered Environmental Analysis**  
Lina integrates satellite imagery (NASA, Sentinel), oracles data, and decentralized oracles (e.g., Chronicle, DIA) to build a dynamic, accurate profile of each farm.

**Automated Field Assessment**  
Each farm receives a score (0–100) measuring its potential and risk:

**Example:**  
- Farmer A scores 85 → Eligible for up to \$1,000 at a ~7% annual interest rate.  
- Farmer B scores 60 → Eligible for up to \$500 at a ~12% annual interest rate.

These data-driven insights enhance both farmer decision-making and investor confidence, reducing guesswork and promoting fairer lending terms.

---

### 3.2 Financing and Automated Investment Pools

**Token Acquisition by Investors**  
Investors obtain Lina’s native token (LINA) with stablecoins (USDT, USDC, DAI) or network-specific tokens (WLD, mUSD, AUSD).  
These tokens power the financing mechanism and represent each investor’s stake.

**Staking in a Smart Contract Pool**  
Investors deposit their LINA tokens in an automated lending pool.  
The pool allocates funds to farmers based on their farmland scores and the sequence of loan requests—no manual selection required.

**Repayment and Returns**  
When a farmer repays, the principal plus interest flows back into the pool.  
Investors receive a proportional share of the returns, alongside potential token price appreciation.

---

### 3.3 Payment Options for Farmers

**Standard Repayment**  
- Farmers repay principal + interest in LINA or stablecoins (auto-converted to LINA).  
- Suitable for small and medium loans.

**Profit-Sharing Model (Large Loans)**  
For loans exceeding 100,000 LINA, farmers may opt for:

- **Option 1:** ~10% annual interest, fixed.  
- **Option 2:** ~6% annual interest + 5% share of agricultural profits (only if profitable).

This aligns incentives between farmers and investors, sharing both risks and rewards.

---

### 3.4 Liquidity and Secondary Market (DEX)

Lina runs an internal decentralized exchange (DEX) on the chosen blockchain, enabling:

- Immediate trading of LINA among investors, farmers, and liquidity providers (LPs).  
- Liquidity for those who wish to exit early, mitigating the typical illiquidity of agriculture.

**Liquidity Providers (LPs)**  
- Contribute LINA + stablecoin pairs to the DEX, earning fees and sometimes extra LINA incentives.  
- Facilitate constant token liquidity and help prevent excessive volatility.

---

### 3.5 Community Fund (Governance)

**Allocation of Funds**  
- A share of interest revenue and trading fees goes to a Community Fund.  
- This fund covers micro-loans for technical analyses or minor improvements on farms.

**Governance and Voting**  
- Farmers submit small grant requests (e.g., 500 LINA for soil analysis).  
- The community, verified through decentralized identity (World ID, zkMe, QuarkID), votes to approve or deny.  
- The repaid capital plus interest goes back into the fund, creating a self-sustaining system.

---

## 4. Ecosystem Participants

### Farmers
- Access objective, data-driven loans.  
- Improve farm scores by implementing recommended practices and using real-time analytics.

### Investors
- Buy and stake LINA tokens to finance farmers.  
- Earn stable returns and potentially see token price appreciation.  
- Optionally exit anytime through the DEX.

### Liquidity Providers (LPs)
- Provide DEX liquidity (LINA + stablecoin).  
- Earn fees and potentially extra LINA tokens, while helping stabilize the ecosystem.

### Lina Smart Contracts
- Oversee loan creation, interest calculations, collateral (if any), and governance.  
- Protect transparency and fairness via immutable on-chain logic.

---

## 5. Token Management: Issuance, Storage, and Buyback

### 5.1 Automatic Issuance
**Triggered when:**
- Lending pool liquidity drops below 10%.  
- Loan demand exceeds 90% of available funds.  
- Over 85% of tokens are locked in staking.

**Goal:** Prevent capital shortages for new loan requests.

---

### 5.2 Strategic Storage (No Burning)
- Lina does not burn tokens but keeps them in reserve.  
- If needed, these tokens can be reintroduced without inflating supply abruptly.

---

### 5.3 Strategic Buybacks
- When the market has a token surplus or downward pressure, Lina uses interest and fee revenue to buy back tokens, stabilizing prices.  
- This protects investors and ensures the network remains healthy and sustainable.

---

## 6. Maintaining LINA’s Price Stability

**Controlled Issuance**  
- Minting occurs only when demand is real, preventing reckless inflation.

**Strategic Reserve**  
- Avoids excessive burning and keeps the ecosystem flexible.

**Buyback Mechanisms**  
- Absorb temporary oversupply, mitigating rapid price drops.

**Example:**  
- Start with 10M LINA.  
- 9M in loans, 1M held in reserve.  
- If requests reach 9.5M, Lina issues 500k additional tokens.  
- Later, if there’s a surplus, the platform may buy back 200k to balance supply.

---

## 7. On/Off Ramp Integration: Simplifying Access for Farmers

**On-Ramp:**  
Farmers convert local fiat (bank transfer, card) into stablecoins or LINA through partners (Ramp Network, Mercuryo, etc.).

**Off-Ramp:**  
Farmers turn LINA or stablecoins back into fiat for operational or personal needs, deposited directly into local bank accounts.

**Example:**  
- A farmer receives 1,000 LINA as a loan.  
- Off-ramps those LINA into USD in their bank account.  
- Repayment is handled by on-ramping fiat to stablecoins or LINA and settling the loan on-chain.

---

## 8. Sustainability of the Model

### Farmers
- Obtain cost-effective financing, boosted by high-quality farm analytics.  
- Enhance yields, reduce waste, and more reliably repay debts.

### Investors
- Participate in a low-risk, impact-driven market, backed by real-world farm data and verifiable yields.  
- Benefit from stable token economics.

### Liquidity Providers
- Ensure an active market for LINA, earning fees while supporting decentralized exchanges.  
- Help keep the token’s volatility in check.

### Lina Platform
- Operates sustainably, reinvesting part of revenues (loan interest + trading fees) into buybacks and the Community Fund.  
- Grows alongside the user base, creating a virtuous cycle of data-driven farming improvements.

---

## 9. Implementations on Different Blockchains

Although Lina’s foundational features remain constant, each blockchain brings unique advantages:

### 9.1 Lina on World Chain

**World ID**  
- Guarantees unique, fraud-resistant identities for farmers and investors.

**Zero Gas Fees**  
- Frequent microtransactions are affordable, unlocking broader adoption among small-scale farmers.

**Worldcoin (WLD)**  
- Acts as a global gateway to purchase LINA, aiming for massive user reach.

**Value for Lina:**
- Maximal accessibility: Even users with modest means can transact easily.  
- Scalability: Large volumes of transactions without gas fees encourage adoption.

---

### 9.2 Lina on Mantle Network

**Modular Architecture**  
- Execution, security, and data availability are handled separately, optimizing scalability.

**Optimistic Rollups**  
- Faster, cheaper transactions than Ethereum mainnet.  
- EVM-compatibility enables straightforward deployment of Lina’s smart contracts.

**zkMe Identity + Native Stablecoins (AUSD, mUSD)**  
- Farmers register securely while stablecoins simplify loan disbursements and repayments.

**Value for Lina:**
- Cost-efficiency + synergy with Ethereum’s ecosystem.  
- A frictionless environment for frequent loan disbursements and interest payouts.

---

### 9.3 Lina on zkSync Era

**ZK-Rollups**  
- High throughput, low transaction costs, and Ethereum-level security.

**QuarkID and Passkeys**  
- Streamlined user onboarding, bypassing complex seed phrases or cryptographic keys.  
- Farmers can adopt blockchain finance with minimal friction.

**Oracles & On/Off Ramps**  
- Trusted data sources for climate, soil, and pricing.  
- Seamless fiat-crypto conversions (Ramp Network, Mercuryo).

**Value for Lina:**
- Robust security and data integrity, thanks to zero-knowledge proofs.  
- Farmer-friendly identity solutions and cost-effective transactions, fostering large-scale adoption.

---

## 10. System Architecture

Below is an overview of Lina’s core system architecture, which comprises both on-chain and off-chain components, an AI model, and various third-party integrations:

### 10.1 On-Chain Smart Contracts

- **LoanHandler.sol**  
  Creates loans based on the farm’s status and the liquidity available.  
  Manages loan approvals, milestone-based disbursements, and repayment schedules.  
  Ensures repayment funds are automatically returned to investors.

- **TreasuryHandler.sol**  
  Defines the correct supply and price of LINA tokens.  
  Coordinates with investors to manage liquidity, including emissions and buybacks.  
  Oversees APY rewards for stakers.

- **FarmStatusHandler.sol**  
  Stores a farm’s current status (loan eligibility, risk level, milestone progress).  
  Saves document hashes (e.g., ownership proofs, legal records) for verification and fraud prevention.

---

### 10.2 Off-Chain Components

**Web2 Storage**  
- Holds non-critical farmer data (names, farm descriptions, user profiles).  
- Provides quick access to essential loan information without costly on-chain queries.

---

### 10.3 AI Model

- Consumes satellite data, historical records and oracles feeds to assess soil quality, climate, and overall farm productivity.  
- Computes risk scores and loan eligibility on an ongoing basis.  
- Updates FarmStatusHandler to reflect significant changes or triggered user actions.

---

### 10.4 Third-Party Integrations

**File Storage (Amazon S3)**  
- Securely stores digitally signed documents and images.  
- Document hashes are recorded on-chain for immutability.

**On/Off-Ramps**  
- Farmers can convert USDC/DAI (or other stablecoins) to fiat through Ramp, Binance Pay, local bank APIs, etc.  
- Streamlines withdrawals and loan repayments in local currencies.

---

### 10.5 WorldApp Integration

- **Authentication & Identity**: Farmers log in with decentralized IDs (World ID, zkMe, QuarkID).  
- **Loan Offers & Acceptance**: Farmers receive real-time credit offers based on their FarmStatusHandler data.  
- **Fund Disbursement & Milestones**: Automatic release of loan tranches when certain criteria are met (like soil upgrades or environmental checks).  
- **Repayment & Loan Tracking**: Real-time monitoring of repayment progress and on-chain recording of settlement.

---

## Final Thoughts

Lina represents a revolution in agricultural intelligence and financial inclusion. By merging AI-powered environmental insights, blockchain transparency, and innovative DeFi lending:

- **Farmers** gain practical, data-driven funding that accurately reflects their land’s potential.  
- **Investors** tap into a liquid, impact-driven market with transparent risk profiles and reliable yields.  
- **Communities** thrive via a Community Fund, fostering local improvements and democratic decision-making.

Whether deployed on World Chain (for gas-free transactions and global reach), Mantle Network (for modular scalability and EVM compatibility), or zkSync Era (for ZK-rollup security and seamless user experiences), Lina adapts seamlessly to harness each network’s strengths. Its robust System Architecture (combining on-chain smart contracts, off-chain storage, AI-driven analytics, and user-friendly On/Off Ramps) empowers a smarter, more efficient, and more equitable agricultural future—ensuring that every farmer, regardless of size or location, can access the resources they need to prosper.

---

## Smart Contracts

- **ZKsync**: [https://sepolia.explorer.zksync.io/address/0x775e99241FBAEC469bF24Fa2BEDe28040C34Cde2](https://sepolia.explorer.zksync.io/address/0x775e99241FBAEC469bF24Fa2BEDe28040C34Cde2)  
- **WorldChain**: [https://worldscan.org/address/0xb226c9953eA8E5051eCf19E214bEFD1F5A49F448#code](https://worldscan.org/address/0xb226c9953eA8E5051eCf19E214bEFD1F5A49F448#code)

## Video Demo
A video of how it works is available at this [link](https://www.youtube.com/watch?v=OZjqsoWcy1Y)

## WorldApp Demo
To use a demo in worldApp, scan this QR code:

![WhatsApp Image 2025-03-23 at 07 35 53](https://github.com/user-attachments/assets/826226ad-3f38-4b84-a194-f62cb2073699)
