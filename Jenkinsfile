pipeline {
    agent any
    environment {
        DOCKER_TAG = 'lina-frontend'
        PORT = "3024"
        NEXT_PUBLIC_WORLDCOIN_APP_ID=Credentials(NEXT_PUBLIC_WORLDCOIN_APP_ID)
        NEXT_PUBLIC_WORLDCOIN_API_KEY=Credentials(NEXT_PUBLIC_WORLDCOIN_API_KEY)
        NEXT_PUBLIC_WORLDCOIN_ACTION_ID=Credentials(NEXT_PUBLIC_WORLDCOIN_ACTION_ID)    
        NEXT_PUBLIC_WORLDCOIN_SIGNAL=Credentials(NEXT_PUBLIC_WORLDCOIN_SIGNAL)
        JWT_SECRET=Credentials(LINA_JWT_SECRET)
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
                sh 'docker run -d -e BASE_PATH -p $PORT:3000 --name $DOCKER_TAG $DOCKER_TAG:1.0'
            }
        }
    }
}
