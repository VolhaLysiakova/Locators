properties(
  [
    parameters(
      [
      choice(name: 'scope',
           choices: 'Smoke\nCritical\nRegression\nBugs\n01.Login (Regression)\n02.User Management (Regression)\n03.Pipeline (Regression)\n04.List View (Regression)\n05.Customers (Regression)' +
           '\n06.Deals (Regression)\n07.Leads And Distributions (Regression)\n08.Conversations (Regression)\n09.Customer Card Communication (Regression)\n11.Workplan (Regression)' +
           '\n12.Appointments (Regression)\n13.Mining and Email Blast (Regression)\n15.Reports (Regression)\n17.Desking (Regression)\n20.Quick Search (Regression)' +
           '\n21.SideBar (Regression)\n22.Video (Regression)\n23.Email (Regression)\n24.Inventory (Regression)\n',
           description: 'What application to run tests for?',
           default: 'Smoke'),
      choice(name: 'environment',
           choices: 'Staging\nAutomation\n',
           description: 'Select environment',
           default: 'Staging'),
      choice(name: 'video',
           choices: 'disable recording\nenable recording\n',
           description: 'Do you want to record video?',
           default: 'disable recording'),
      choice(name: 'integration',
                 choices: 'enable integration\ndisable integration\n',
                 description: 'Do you want to integrate with testrail?',
                 default: 'enable integration'),
      ])
      //pipelineTriggers([cron('H 01   1,2,3,4,5')])
  ]
)

pipeline {
    agent any

  stages {
  stage('build') {
  steps {
  bat 'npm install'
}
}
      stage('parallel') {
        parallel {
      // start several test jobs in parallel, and they all
      // will use Cypress Dashboard to load balance any found spec files
          stage('Run tests in parallel A') {
            steps {
              bat 'npx cypress run --record --key d0b49937-75c1-4f8a-a66b-bbf8ad35ab54 --parallel'
            }
          }
          stage('Run tests in parallel B') {
            steps {
              bat 'npx cypress run --record --key d0b49937-75c1-4f8a-a66b-bbf8ad35ab54 --parallel'
            }
          }
          stage('Run tests in parallel C') {
            steps {
              bat 'npx cypress run --record --key d0b49937-75c1-4f8a-a66b-bbf8ad35ab54 --parallel'
            }
          }
        }
      }
    }
}