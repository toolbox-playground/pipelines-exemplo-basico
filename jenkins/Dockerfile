# Use the latest Jenkins
FROM jenkins/jenkins:latest
# Default user is jenkins
USER root

# Install Docker CLI
RUN apt-get update && apt-get install -y lsb-release
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
  https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \
  signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
RUN apt-get update && apt-get install -y docker-ce-cli

# Disable setup wizard
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

# Set the Jenkins configuration as code environment variable
ENV CASC_JENKINS_CONFIG /var/jenkins_home/casc.yaml

# Install plugins
COPY --chown=jenkins:jenkins plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN jenkins-plugin-cli -f /usr/share/jenkins/ref/plugins.txt

# Copy configuration as code
COPY casc.yaml /var/jenkins_home/casc.yaml