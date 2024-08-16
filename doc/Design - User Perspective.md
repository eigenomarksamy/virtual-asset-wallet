# Design - User Perspective

## 1. High-Level Overview

- **Goal**: Develop a virtual asset wallet where users can input transactions and view their portfolio's value through key graphs and tables.
- **Architecture**: Microservices, with each service independently handling specific tasks.

## 2. Front-end Design and Development Plan

### A. Layout and Pages

#### 1. Authentication Pages (Sign In/Up)

- **Login Page**: Users log in using email/username and password.
- **Sign Up Page**: Users create a new account, including fields for email, password and possibly two-factor authentication setup.

#### 2. Dashboard Page

- **Portfolio Overview**: Display the user's total portfolio value.
- **Graphical Representation**:
  - A line chart showing portfolio value over time.
  - A pie chart showing the distribution of assets (e.g., stocks, crypto, etc.)
- **Recent Transactions**: List of recent transactions with basic details like date, type and amount.

#### 3. Transactions Page

- **Input Form**: Users can manually input transactions such as buying assets, converting currency, or transferring to a crypto wallet.
- **Transaction History**: A tabulated view of all transactions with filters for sorting by date, type, and asset class.

#### 4. Wallet/Portfolio Page

- **Asset Breakdown**: Detailed breakdown of each asset in the portfolio with current value, percentage of total portfolio, and performance indicators.
- **Valuation**: Display real-time or most recent valuation data pulled from the `valuation` microservice.

### B. Front-End Technologies

- **Framework**: User **React.js** for dynamic, component-based architecture.
- **Style Management**: Consider **Redux** or **Context API** for managing state across components, especially for handling user data and transactions.
- **Styling**:
  - **TailwindCSS** for a modern and responsive design.
  - **Bootstrap** if a more structure, component-driven CSS framework is preferred.
- **Charts and Graphs**: Utilization of **Chart.js** or **Recharts** for rendering graphs and charts.
- **From Handling**: **Formik** along with **Yup** for validation to handle forms efficiently.

### C. API Integration

- **Authentication**: Integrate with the authentication microservice to handle login, sign-up, and session management.
- **Transaction Input**: Send transaction data to the input microservice.
- **Wallet Display**: Fetch and display data from the wallet and computation microservices.
- **Valuation**: Pull the latest market prices from the valuation microservice to keep the portfolio up-to-date.

### D. Responsive Design

- Ensure that all pages and components are responsive, so users have a good experience across desktop, tablet, and mobile devices.

### E. Navigation

- A side or top navigation bar to switch between the Dashboard, Transactions, and Wallet/Portfolio pages.

## 3. Development Workflow

1. **Set Up Project**: Initialize a React project using `create-react-app` or a similar setup tool.
2. **Design Layout**: Create a layout for each page (authentication, dashboard, transactions wallet).
3. **Develop Components**: Build individual components like forms, charts, tables, and navigation.
4. **API Integration**: Implement the API calls to interact with your microservices.
5. **Styling**: Apply TailwindCSS or Bootstrap to style the components.
6. **Testing**: Write unit tests for components and integration tests for API interactions.
7. **Responsive Design**: Adjust CSS for responsive behavior.
8. **Deployment**: Deploy the front-end to a hosting service (e.g., Netlify, Vercel).

## 4. Next Steps

- **Wireframing**: If you don't have wireframes yet, creating basic wireframes for each page can help visualize the design.
- **Set Up Repository**: Set up a version control system (GitHub, GitLab) for collabrative development.
- **Backend Coordination**: Ensure that the backend microservices are set up and accessible via RESTful, GraphQL, etc. APIs.

## 5. Future Ideas

- **Friends and feed**: Showing activity like rise in portfolio value, dips, etc.
- **Gamification**: Achievements, daily log-in rewards, etc.
- **Execution of Transactions**: Secure execution for transactions through integration with broker APIs.
- **Algorithmic Trader**: Introduction of algorithmic/quant trading feature, based on multiple strategies.
- **Seamless Secure Integration**: Integrate with bank and broker APIs, to update transaction history without user input.
- **User data analytics**: Analyze user data based on their transaction history.
- **AI financial advisor**: Integrate/Provide an AI SaaS as a financial advisor.
