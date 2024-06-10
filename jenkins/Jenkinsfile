pipeline {
  agent {
        docker {
            image 'node:carbon'
            args '-u 0:0'
        }
  }
  stages {
    stage('Install') {
      steps {
        sh 'cd app && npm install'
      }
    }
    stage('Test'){
      steps{
        sh 'cd app && npm test'
      }
    }
    stage('Build'){
      steps{
        sh 'docker build -t nodejs .'
      }
    }
  }
}