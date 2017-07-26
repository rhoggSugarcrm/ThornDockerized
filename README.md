# ThornDockerized
Docker environment to run Thorn (https://github.com/sugarcrm/thorn) to test Sugar's REST API

## Running the container
* Run the container with `docker-compose up -d`
* Stop the container with `docker-compose down`

## Accessing the container
Execute `docker exec -it thorn bash` to enter the container into /workspace <br />

## Executing the sample test file
Enter /workspace/samples and run `./runtest.sh https://myurl.com/sugar user pass test.js`. Obviously the docker container has to be able to connect to https://myurl.com/sugar.<br />
Note that every time you run the sample test file, a new Contact named John Smith will be created.

## File locations
The tests can be stored on the volume in ./data/ and on the container in /workspace<br />
A sample test, and a bash script to run a single test at the time, can be found in ./data/samples and /workspace/samples<br />
