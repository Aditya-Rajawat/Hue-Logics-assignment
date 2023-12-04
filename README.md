# Hue-Logics-assignment(SBI Dashboard)

- Created a dashboard having four tiles displaying values. These tiles represent metrics of SBI for 4 quarters.

- Live Link : https://sbidashboard.netlify.app/

- Tech Stack : ReactJS, Tailwind CSS & Vite.

# Setting up the project

- Install Vite and initialize react app
  ```
  npm create vite@latest
  ```
- Install tailwindcss via npm, and create your tailwind.config.js file
  ```
  npm install -D tailwindcss
  npx tailwindcss init
  ```
  
- Configure your template paths
  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
  
- Add the Tailwind directives to your CSS
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
  
