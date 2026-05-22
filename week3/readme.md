1.Generate package.json
   npm init -y
2.Create expresss server
3.Install mongoose and connect to MongoDB server
  

      Rest Api  ----MongoDB native driver  ---> DB Server
      Rest Api  ----Mongoose ODM(object doc mapping) tool      ---> DB Server

4.Build USER REST API
              - Create User
              -Read all users
              -Read a User by ID
              -Update a User by ID
              -Delete a User by ID

5.Create Schema and Model of the Resource(User)

### user authentication(login)
  -submit credentials and get token

  
  -public routes(by anyone)
  -protected routes(by authenticated users only)
      req-->middleware-->routes
              to access cookies property of req obj we need cookie parser middle ware
                other wise req.cookies is undifiened   
                --npm i cookie-parser
  xss-cross site script
  CSRF
  lax(relaxed ristriction)


cross origon works on same origon
cross origon req means when the client n server applications are running in different domains
same origon req means the client also running on same domain of the server
cookies will send along with req automatically in same origon req
but for cross origon req,the token should be explicitilly inclluded to the req



folder-controllers
export const createUser=async=>  //routes


//create-user.controller.js
//user.route.js
