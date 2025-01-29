# Lab Guy Dashboard

## Installation

1. `npm i`

2. Create/add variables in `.env` file in root directory
   ```js
   VITE_ADMIN_PATH="/admin"    #change it
   VITE_SERVER_API_URL="http://localhost:3000/api"    #change it
   ```
3. You are good to go!
   ```js
   npm run dev
   npm run build
   npm run preview
   ```

## Todo

1. Future improvements

- Optimize re-renders of forms caused by Snackbar appearance
  - possible solutions: Redux
- Optimize Library
  - possible solutions: Redux, pagination
