# Locators
A study project.

Before running test use should install NodeJS >6.1.0 at you environment: https://nodejs.org/en/download/

To run tests please do the following:
1. Load the project from GitHub https://github.com/VolhaLysiakova/Locators
2. Install al the components with the command:
   
   ```
   npm install
   ```
3. Run all tests: 
  - in Electron:
    
    ```
    npx cypress run
    ```
  - in Chrome:
    
    ```
    npx cypress run -b chrome
    ```
4. To record tests in the Cypress Dashboard perform the following command: 
  - in Electron:
    
    ```
    npx cypress run --record --key d0b49937-75c1-4f8a-a66b-bbf8ad35ab54
    ```
  - in Chrome:
    
    ```
    npx cypress run -b chrome --record --key d0b49937-75c1-4f8a-a66b-bbf8ad35ab54
    ```
5. Results are loaded into the Cypress Dashboard:  
   https://dashboard.cypress.io/projects/zk5ien/runs
   Please, log in with your credentials - since the project is public you will be able to see results and report into this project in case of running of tests at your local env with the key.
