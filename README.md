# ThornDockerized
Docker environment to run Thorn (https://github.com/sugarcrm/thorn) to test Sugar's REST API

## Building image
Build the image with: `docker build -t thorn .`<br />
Thorn version is defined on ./thorn/package.json to the latest 0.5.0-beta.1.

## Executing the sample test file
Assuming the tests are located inside the samples folder, it is possible to run ./samples/test.js with `docker run -v ${PWD}/samples:/tests -t -i thorn ./runtest.sh https://myurl.com/sugar user pass /tests/test.js`<br />
Note that every time you run the sample test file, a new Contact and an Account will be created and immediately soft deleted.
