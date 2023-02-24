# P12 : React & Recharts Dashboard | SportSee

<strong> Project presentation  <strong>
---

SportSee is a startup dedicated to sport's coaching.
The goal of this repository/project is to develop a new Dashboard's version of the application, where user can have all the important datas about his sports activities.

This project was developed using [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [Recharts Library](https://recharts.org/en-US/)
  
  ---
  
  # 1. BACK-END
  
  The back-end of this project require [Node.js](https://nodejs.org/en/) and a package manager such as npm or yarn.
  
  - To get the back-end, you have to clone it locally from
  
  
  ```
  git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
  ```
  
  
 - Then you access your local repository and execute the command :
  
  ```
  npm install
  ```
  
  And then you can launch the back-end part with
  
 ```
  npm run dev 
  ```
  
  <strong> URL </strong>
  
  The default url with Vite package will be [localhost:5173](http://localhost:5173/)
  
  ---
  
  # 2. FRONT-END
  
   - To get the front-end, you have to clone it locally from
  
  ```
   git clone https://github.com/AllanDltr/OC-DAJR-P12-Sportsee.git
  ```
  - Then you access your local repository and execute the command :
  
  ```
  npm install
  ```
  
  - Now you can launch the application by using
  
  ```
  npm run dev
  ```
  
  ---
  
  # 3. Endpoints
  
  - ``` http://localhost:5173/user/${userId} ```
  
 Retrieve user basic informations (First Name, Last Name, Age), but also Today Score and the Key Data (Calorie Count, Protein/Carbohydrate/Lipid Count)
  
- ``` http://localhost:5173/user/${userId}/activity/ ```
  
Retrieves user activity listed by sessions, and each one contain info about  Day / Kilogram / Calories

- ``` http://localhost:5173/user/${userId}/average-sessions ```
  
Retrieve user activity listed by sessions, each one contain info about the day of the week (starting on Monday) and the session length
  
- ``` http://localhost:5173/user/${userId}/performance ```
  
Retrieve user performance, listed in an array "Kind" containing 6 category (Cardio, Energy, Endurance, Strength, Speed, Intensity) and then we have data object, containing the value and the category corresponding to it
