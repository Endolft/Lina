pipeline {
    agent any
    environment {
        DOCKER_TAG = 'lina-frontend'
        PORT = "3024"
        NEXT_PUBLIC_WORLDCOIN_APP_ID=credentials('NEXT_PUBLIC_WORLDCOIN_APP_ID')
        NEXT_PUBLIC_WORLDCOIN_API_KEY=credentials('NEXT_PUBLIC_WORLDCOIN_API_KEY')
        NEXT_PUBLIC_WORLDCOIN_ACTION_ID=credentials('NEXT_PUBLIC_WORLDCOIN_ACTION_ID')    
        NEXT_PUBLIC_WORLDCOIN_SIGNAL=credentials('NEXT_PUBLIC_WORLDCOIN_SIGNAL')
        JWT_SECRET=credentials('LINA_JWT_SECRET')
 }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t $DOCKER_TAG:1.0 .'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Stopping previous version...'
                sh 'docker stop $DOCKER_TAG || echo Nothing to stop'
                sh 'docker rm $DOCKER_TAG || echo Nothing to remove'
                echo 'Deploying....'
                sh 'docker run -d -e BASE_PATH
                -e NEXT_PUBLIC_WORLDCOIN_APP_ID
                -e NEXT_PUBLIC_WORLDCOIN_API_KEY
                -e NEXT_PUBLIC_WORLDCOIN_ACTION_ID
                -e NEXT_PUBLIC_WORLDCOIN_SIGNAL
                -e JWT_SECRET
                 -p $PORT:3000 --name $DOCKER_TAG $DOCKER_TAG:1.0'
            }
        }
    }
}
