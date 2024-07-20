Brief Description
This project involves designing, implementing, and deploying a scalable Language Model inference service using Ollama. The service is tested for performance under load and is configured to scale automatically using Kubernetes' Horizontal Pod Autoscaler (HPA).


Implementation
Description of the Architecture
The architecture consists of:

A Docker container running the Ollama inference service.
A Kubernetes cluster to manage and orchestrate the containerized application.
A NodePort service to expose the application to external traffic.
HPA to manage the scaling of the service based on CPU utilization.


Steps to Deploy the Application
Build the Docker Image:
docker build -t username/ollama-service:latest .

docker push username/ollama-service:latest

Apply Kubernetes Manifests:
kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

kubectl apply -f hpa.yaml

Verify Deployment:
kubectl get pods

kubectl get services

kubectl get hpa


Load Testing:
Description of the Load Testing Setup
The load testing is performed using k6.

Commands/Scripts Used for Load Testing:
Install k6:
brew install k6

Created load_test.js file.

Run the Load Test:

k6 run load_test.js

Commands to Apply HPA

Apply HPA Manifest:

kubectl apply -f hpa.yaml

Results

Best Practices and Lessons Learned

Kubernetes HPA effectively managed the scaling of the service.
k6 provided an easy-to-use interface for load testing.

Challenges Faced :
Networking Issues: Ensuring proper configuration of NodePort to expose the service.
Resource Limits: Setting appropriate resource limits for the pods to ensure efficient scaling.
Reproducing the Setup

Prerequisites
Docker installed on your machine.

Kubernetes cluster 

kubectl and k6 installed.

docker build -t username/ollama-service:latest .

docker push username/ollama-service:latest

Apply Kubernetes Manifests:
kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

kubectl apply -f hpa.yaml

How to Run the Load Tests
Create Load Test Script:

Use the provided load_test.js.
Run Load Test:
k6 run load_test.js

How to Apply the HPA Configurations
Apply HPA Manifest:
kubectl apply -f hpa.yaml

Conclusion
Summary of the Project
The project successfully implemented a scalable language model inference service using Kubernetes. The service was tested for performance under load, and autoscaling was configured using HPA.

Future Improvements
Enhanced Monitoring: Integrate Prometheus and Grafana for more detailed monitoring and visualization.
Advanced Load Testing: Use more complex scenarios for load testing.
Resource Optimization: Fine-tune resource requests and limits for better performance and cost-efficiency.
