## How to start project
1. Install deps `yarn`
2. Run project `yarn serve`
3. Go to [http://localhost:3001](http://localhost:3001) You ill be redirected to docs


### Make request
For example
`curl --header "Content-Type: application/json" --data '{"email":"xyz@zyx.com","password":"xyz"}' -i http://localhost:3001/api/v1/user/`