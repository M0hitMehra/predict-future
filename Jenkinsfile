pipeline {
    agent any

    environment {
        REGISTRY = "docker.io/mehramohit007"   // 🔁 change to your DockerHub username
        SERVICE  = "gateway"                // 🔁 change if needed
    }


    stages {

        stage('Checkout') {
            steps {
                checkout scm
                script {
                    IMAGE_TAG = sh(
                        script: "git rev-parse --short HEAD",
                        returnStdout: true
                    ).trim()
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir("services/${SERVICE}") {
                    sh "docker build -t ${REGISTRY}/${SERVICE}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'docker-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${REGISTRY}/${SERVICE}:${IMAGE_TAG}
                    """
                }
            }
        }

        stage('Approval') {
            steps {
                input message: "Deploy ${SERVICE}:${IMAGE_TAG} to Minikube?"
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                    kubectl set image deployment/${SERVICE} \
                    ${SERVICE}=${REGISTRY}/${SERVICE}:${IMAGE_TAG}
                """
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully"
        }
        failure {
            echo "Pipeline failed"
        }
    }
}
