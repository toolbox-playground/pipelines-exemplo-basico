# Create a pipeline for bitbucket project

## The CI pipeline should:

- Be triggered only on Pull Resquest
- Test the install of dependencias using npm install
- execute test if the application has one

## The CD pipeline shoud:

- Be triggered manually or via main merge
- Execute install do dependencias
- Execute tests
- call gcp sdk to execute the cloud-run deploy on autoavaliar-dev project
- The pipeline should add a manual step to execute the deployment on the official project