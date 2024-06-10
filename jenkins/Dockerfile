# Use the latest Jenkins
FROM jenkins/jenkins:latest

 # Disable setup wizard
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

# Set the Jenkins configuration as code environment variable
ENV CASC_JENKINS_CONFIG /var/jenkins_home/casc.yaml

# Install plugins
COPY --chown=jenkins:jenkins plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN jenkins-plugin-cli -f /usr/share/jenkins/ref/plugins.txt

# Copy configuration as code
COPY casc.yaml /var/jenkins_home/casc.yaml