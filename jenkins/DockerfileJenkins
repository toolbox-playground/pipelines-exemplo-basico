# Use the latest Jenkins
FROM jenkins/jenkins:lts-jdk17
# Default user is jenkins
USER root

# Install Docker CLI
RUN apt-get update -qq \
    && apt-get install -qqy apt-transport-https ca-certificates curl gnupg2 software-properties-common
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
RUN apt-get update  -qq \
    && apt-get -y install docker-ce
RUN usermod -aG docker jenkins

# Disable setup wizard
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

# Set the Jenkins configuration as code environment variable
ENV CASC_JENKINS_CONFIG /var/jenkins_home/casc.yaml

# Install plugins
COPY --chown=jenkins:jenkins plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN jenkins-plugin-cli -f /usr/share/jenkins/ref/plugins.txt

# Copy configuration as code
COPY casc.yaml /var/jenkins_home/casc.yaml