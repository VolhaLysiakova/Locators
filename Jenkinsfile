properties(
  [
    parameters(
      [
      choice(name: 'video',
           choices: 'disable recording\nenable recording\n',
           description: 'Do you want to record video?',
           default: 'disable recording'),
      ])
      //pipelineTriggers([cron('H 01   1,2,3,4,5')])
  ]
)

pipeline {
    agent any

   stages {

        stage('define variables') {
               steps {
                   script{
                    video_configure_on = "--config video=true"
                    video_configure_off = "--config video=false"
                    video_option = ("$params.video" == "enable recording") ? video_configure_on :
                    ("$params.video" == "disable recording") ? video_configure_off : ""
                   }
               }
          }


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
              bat 'npx cypress run --record --key d0b49937-75c1-4f8a-a66b-bbf8ad35ab54 ${video_option} --parallel'
            }
          }
          stage('Run tests in parallel B') {
            steps {
              bat 'npx cypress run --record --key d0b49937-75c1-4f8a-a66b-bbf8ad35ab54 ${video_option} --parallel'
            }
          }
          stage('Run tests in parallel C') {
            steps {
              bat 'npx cypress run --record --key d0b49937-75c1-4f8a-a66b-bbf8ad35ab54 ${video_option} --parallel'
            }
          }
        }
      }
    }
}