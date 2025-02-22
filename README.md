# Minimal UI - React Admin Dashboard

![license](https://img.shields.io/badge/license-MIT-blue.svg)

![preview](public/assets/images/minimal-free-preview.jpg)

> Free React Admin Dashboard made with Material-UI components and React + Vite.js.

## Project Overview

This project is a customized version of the **Minimal Free - React Admin Dashboard**, enhanced with additional features such as authentication, a new navigation link, and a stock price chart. It follows the assignment requirements outlined below.

## Features Implemented

### ✅ Project Setup & Deployment

- The Minimal Free - React Admin Dashboard is set up and runs locally without errors.
- The project is deployed on **Vercel** and accessible via a public URL.

### ✅ Authentication

- The Sign In screen now supports **username and password authentication** using **Work OS AuthKit**.
- A sandbox account on WorkOS is used to test authentication.
- Users can successfully log in and access the admin dashboard.

### ✅ New Page & Navigation

- A **new menu link** is added to the left-side navigation bar.
- Clicking the new link correctly navigates to a newly created page.

### ✅ Chart Implementation

- The new page contains a **chart** displaying **AAPL (Apple) end-of-day stock prices for the past 12 months**.
- Data is **fetched dynamically** from an API providing stock prices in JSON format.
- The API endpoint is **deployed on Vercel** with hardcoded stock pricing data.

### ✅ Code Quality & Functionality

- The project follows **best coding practices** and maintains a well-structured codebase.
- The application runs **smoothly** without errors.

## Quick Start

1. **Clone the repo:**
   ```sh
   git clone https://github.com/christianahvilla/korzo-test
   ```
2. **Recommended Node.js version:** `v20.x`
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Run the project locally:**
   ```sh
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3039`

## Deployment Instructions

- The project is deployed on **Vercel**.
- Repository: [GitHub Repository](https://github.com/christianahvilla/korzo-test)
- Live Version: [Netlify Deployment](https://delicate-buttercream-14d740.netlify.app/)

## API Endpoint (Stock Prices)

- The API providing **AAPL stock price data** is deployed on Vercel.
- Endpoint: `https://your-vercel-project.vercel.app/api/stocks`
- The response format is JSON, containing **end-of-day stock prices** for the last 12 months.

## Challenges & Improvements

- Implemented Work OS authentication for secure login.
- Designed an additional page with dynamic chart integration.
- Deployed a stock price API to provide real-time data.
- Ensured a smooth, error-free user experience.

## Submission Details

- **GitHub Repository:** [GitHub Repository](https://github.com/christianahvilla/korzo-test)
- **Live Demo:** [Netlify Deployment](https://delicate-buttercream-14d740.netlify.app/)

## License

Distributed under the [MIT](https://github.com/minimal-ui-kit/minimal.free/blob/main/LICENSE.md) license.

## Contact

For any inquiries, reach out via email: **support@minimals.cc**
