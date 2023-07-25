# Meet Exodus 🧠

Exodus is an NFT analytics platform that allows NFT traders to track, trade and analyze. All in one platform.

The thesis behind this project is "Data is good, Insights are Better, Actionable Insight is the Best" 

## 👾 Tech Stack

**Client:** React, React Query, HTML, SASS, Chart.JS, Axios, Ether.js, ConnectKit, WAGMI

**Server:** Node, Express, Axios


## 🎯 Features

- Search for any NFTs on the Ethereum Blockchain
- Live Sales & Listings Data for each NFT collection
- Momentum Indicator for each NFT collection
- Tracking all new NFT collections as they launch 
- Portfolio Breakdown
- Trader Grade & Wallet Analysis


## 🏃 Run Locally

Clone the project

```bash
git clone git@github.com:michaelshimeles/Exodus-Client.git
```

Go to the project directory

```bash
  cd Exodus-Client
```

Install dependencies

```bash
  npm install
```
Start the client

```bash
  npm run start
```

### In order to run the server please refer to this repo:

https://github.com/michaelshimeles/Exodus-Server

⚠️ NOTE: When running the app, console might output warnings from certain dependencies. These warnings do not cause any problems with the application.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Client:

`REACT_APP_ALCHEMY_ID`

For the Alchemy ID, you'll need to get API KEY from https://www.alchemy.com/

`REACT_APP_URL`

Server:

`PORT`

`RESEVOIR_API_KEY`

`MODULE_API_KEY`

`FIVE_API_KEY`

`ETH_SALES_API_KEY`

`TRANSPOSE_API`

`NFT_PORT_API`

`NFT_GO_API`

## API Reference

#### Please refer to the server repo for this project

https://github.com/michaelshimeles/Exodus-Server


## Screenshots

### Homepage:
![Homepage](https://user-images.githubusercontent.com/69605071/207727873-c7ece8d2-354b-4593-829d-5ff4ebdd73f9.png)

### Terminal:
![Terminal Page](https://user-images.githubusercontent.com/69605071/207727880-4eef6076-eb6b-402d-be4d-3973556499b3.png)

### Terminal (More):
![Terminal Page (More)](https://user-images.githubusercontent.com/69605071/207727868-66f8e88b-d8a7-46cf-a5fc-f07fd06b607a.png)

### Hot Mints:
![Hot Mints Page](https://user-images.githubusercontent.com/69605071/207727877-f10c0771-7310-46f3-8ae0-358a5f73beae.png)

### Portfolio:
![Portfolio Page](https://user-images.githubusercontent.com/69605071/207727878-948b4396-0a83-43d4-849d-ce782f1b6468.png)
## Lessons Learned

When building Exodus, the thesis behind this project was to present as much actionable data to the end user to make sound and educated decisions.

The lessons I've learned are as follows:

- Planning is just as important as development (at least if you want a smooth dev experience)
- Always assuming requests will fail and planning what to do when the request fails 
- Using and implementing Chartjs to create live charts
- Implementing Wallet authentication
- Using Ether.js and Alchemy node to connect to the blockchain
- Using Wagmi & ConnectKit for wallet connection
