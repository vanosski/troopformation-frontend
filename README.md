
---

# **TroopFormation Frontend**  

This repository contains the **frontend** of the **Troop Formation Calculator**, a MERN-based application that allows users to calculate and store optimal troop formations for strategic gameplay. It provides an intuitive interface with authentication and formation calculation features.  

For backend logic, refer to the [TroopFormation Backend Repository](https://github.com/vanosski/troopformation-backend).  

---

## **Table of Contents**  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Directory Structure](#directory-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Future Improvements](#future-improvements)  
- [Contact](#contact)  

---

## **Features**  
- **User Authentication**: Secure login and registration.  
- **Troop Formation Calculation**: Interactive form to calculate optimal troop formations.  
- **Backend Integration**: Communicates with the backend for calculations and result storage.  
- **Responsive Design**: Works seamlessly on desktop and mobile.  

---

## **Tech Stack**  
- **Frontend**: React, HTML5, CSS3  
- **Analytics**: Vercel Analytics  
- **Version Control**: Git, GitHub  
- **Deployment**: Vercel  

---

## **Directory Structure**  
```
frontend/  
│  
├── .git/  
├── node_modules/  
├── public/  
│   ├── favicon.ico  
│   ├── index.html  
│   ├── logo.svg  
│   ├── manifest.json  
│   └── robots.txt  
│  
├── src/  
│   ├── components/  
│   │   ├── Home.js  
│   │   ├── Login.js  
│   │   ├── Register.js  
│   │   └── TroopFormationForm.js  
│   │  
│   ├── App.css  
│   ├── App.js  
│   ├── App.test.js  
│   ├── index.css  
│   ├── index.js  
│   ├── reportWebVitals.js  
│   └── setupTests.js  
│  
├── .gitignore  
├── package-lock.json  
├── package.json  
└── README.md  
```  

---

## **Installation**  
### Prerequisites  
- Node.js installed  
- Backend API running ([Backend Repository](https://github.com/vanosski/troopformation-backend))  

### **Setup Instructions**  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/vanosski/troopformation-frontend.git  
   cd troopformation-frontend  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the frontend server:  
   ```bash  
   npm start  
   ```  
   The app will be available at [http://localhost:3000](http://localhost:3000).  

---

## **Usage**  
1. **User Authentication**:  
   - Register a new user or log in with existing credentials.  

2. **Troop Formation Calculation**:  
   - Navigate to `/TroopFormationForm` to input data and perform calculations.  

3. **Backend Communication**:  
   - Ensure the backend is running to save and retrieve formation results.  

---

## **Future Improvements**  
- **State Management**: Implement Redux for improved state handling.  
- **API Integration**: Use Axios for smoother API requests.  
- **Testing**: Add more comprehensive tests with Jest.  
- **Validation**: Add form validation to enhance user experience.  

---

## **Contact**  
If you have any questions or feedback, feel free to reach out:  
- **GitHub**: [vanosski](https://github.com/vanosski)  
- **LinkedIn**: [Vanssh Parikh](https://linkedin.com/in/vanssh-parikh-765a2a156)  

---
