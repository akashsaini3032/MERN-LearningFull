

/*
       STEPS OF CREATING AN E-COMMERCE WEBSITE USING REACT and REDUX TOOLKIT

       1) Create a new React + vite app using npm create vite@latest my-app -- -- ( Where my-app contains then name of the app)
       2) Nessasary installation like react-router-dom, redux, redux-toolkit, react-redux, react-router-dom, bootstrap  as well as some nessasary plugins
       3) Create a store using configureStore from redux-toolkit
       4) Create a reducer using createSlice from redux-toolkit
       5) Create a component using functional component and connect it with the store using connect from react
       6) Create a route using react-router-dom and connect it with the component
       7) Create a layout component and wrap the component with the layout component
       8) Create a navbar component and wrap the layout component with the navbar component
       9) Create a footer component and wrap the layout component with the footer component
       10) Finally, run the app using npm run dev

                      
              ( PERSISTANCE OF DATA ) it refers to the Data Refresh rate

    * React, a popular JavaScript library for building user interfaces, was created by Jordan Walke, a software engineer at Facebook (now Meta), and was initially released as an open-source project in 2013. 
 
    * There are some Rules for creating a react-APP
      1) Every element or tag even a non-Container tag should be closed even if its <br/> it should be closed 
      2) Every Javascript expression whether its a regular function or a varaible should be wrapped in curly braces { }
      3) Each and every element should be wrapped inside a parent element whether its a div or any inlinhe or block element
       <>
        //  Fragments which can be used and iniside these fragments(<> FRAGMENTS </>) we will create a component
       </>
       4) Every Components Name have the first letter Capitalized as it follows the CamelCase.



   
    
    * Browseer do not understand React , it only understands HTML, CSS, and JavaScript. So it Contains a Babble compiler to convert the react into pure javascript 
    
    
    *  browser understand the pure javaScript
    * React Syntax for the devlopment
       const App = ()=> {
        return(
        <>
          <h1> Hello World </h1>



        </>
        )
        
    }
    export default App;  -- we use the module to export the Data and import to use the export Components
    * React is a library which is used to build user interface in web and mobile applications

======================================================================================================================================================================================================================================================================================================
                                                   
                                                            HOOKS
    
    * Hooks are special functions in React that allow functional components to use state and other React features without needing class components. They were introduced in React 16.8 to simplify state management and lifecycle methods.
    
     1) Hooks are bascially the connection which we can connect to another Components or we can extsablish a connection via using the HOOKS
     2) Hooks are the important topic which is used to make a website Dynamic and its helpful in Constructing and creating a term
     3) Hooks can be called only in the top level of the component
     4) Hooks should only be used in React function components or custom hooks.
            

           React provides several built-in hooks, categorized as follows:

                                                 BASIC HOOKS
                                            Hook	        Description
                                        1) useState	        Manages state in functional components
                                        2) useEffect	    Handles side effects (e.g., API calls, subscriptions)
                                        3) useContext	    Accesses values from the React Context API
                                        
                                               ADDITIONAL HOOKS
                                            Hook	        Description
                                        1) useReducer	    Alternative to useState for complex state logic
                                        2) useCallback	    Optimizes functions by memoizing them
                                        3) useMemo	        Optimizes expensive calculations by memoizing values
                                        4) useRef	        Accesses DOM elements or stores mutable values without re-rendering

                                              RARELY USED HOOKS
                                            Hook	             Description
                                        1) useImperativeHandle	 Customizes instance values exposed when using forwardRef
                                        2) useLayoutEffect	     Similar to useEffect, but runs synchronously after all DOM changes
                                        3) useDebugValue	     Customizes debug labels for custom hooks
                                        4) useDeferredValue	      Delays updating a state value for better performance
                                        5) useTransition	      Helps create non-blocking UI updates



===================================================================================================================================================
===================================================================================================================================================
                                                       
                                                  FLUX COMPARISON WITH REDUX

  1)  Just like Redux -  Flux is also used in building client side Application and it is worked on the architechureal pattern (Not library) 
  2) Flux is created by Facebook just like redux it is also used to manage the state of the application
  3) Flux is made up for a unidirectional Flow which do not allow us to change state of the application or someone cannot change the state,methods of any application
  4) Flux require a dispatcher and store to manage the state of the application while in the redux it contains the dispatch hook which can be helpful for us so that we can dispatch the action and methods (Function) from the slice we have crreated and use it in the function above the formalities and it can be helpful for us to made the application more dynamic and it can be helpful for us to make the application more dynamic and it can
  5) Flux is not part of React. It is a design pattern introduced by Facebook to complement React for state management. React itself is a UI library and does not include Flux or Redux.



                                            Key Differences Between Flux and Redux

                     Feature	                     Flux	                                             Redux
                     Architecture	               Pattern (not a library)	                             Library
                     stores	                      Multiple stores	                                   Single store
                     State Management	       Stores manage their own state	                     Reducers manage state for the entire app
                     Dispatcher	                Central dispatcher	                                 No dispatcher (actions sent directly to store)
                     Complexity	           More complex (multiple stores, dispatcher)	             Simpler (single store, pure reducers)
                     Popularity             	Less popular (mostly replaced by Redux)	             Widely adopted in the React ecosystem







======================================================================================================================================================================================================================================================================================================



                                                     REDUX / TOOKIT 

    * Redux, a state management library for JavaScript applications, was created by Dan Abramov and Andrew Clark
         * Redux Toolkit, a set of tools for working with Redux, was created by the Redux team
              


    *  we can aslo create some other projects and the persistance which contains a lot of data and the data is not changed in the app, we       can use the persistance.

    *  In the context of an e-commerce website, persist typically refers to retaining data or state across user sessions, page refreshes, or even after the browser is closed. This ensures a seamless and personalized experience for users. Here's how persistence works in e-commerce:
    
*  To use the persitance it actually indicates that the data is not changed in the app, we can use the persistance in the following ways:
  1) Local Storage: This is a simple way to store data locally on the user
  2) Some another example can be written as the following:
    a) If i add a cart and the client wants me to store the selected cart items and it wont refresh when the client refreshes the page, then we can use the persistance.
    b) The Cart itself says ( REMEMBER ME !! ) then we can use the persistance.

======================================================================================================================================================================================================================================================================================================


So as a devloper we can feel many changes and we create a lots of projects and we can use the REACT AND NODE in the following ways:

2) For the backend part as MERN stack devloper we gonna use the NODE js which is pretty helpful for us to create and important Projects and it is helpful for us to know what is NODE JS


( X ) TO create a website we have to unnderstand the Structure which consists of MVC STRUCTURE ( MODEL VIEW STRUCTURE ) and we have to understand the following things:
  a) A Model refers to the structure or we can say about the paramters and datatypes which we will use in our Project it will be Done by Mongodb and mongoose  (MongoDb is the Database and mongoose is the Driver)
     (Mongoose is a software which we can install using npm i mongoose it is used to connect the backend with the Database )
  b) React is a frontend library so it can be handled in the View Folder which we can use it to create components and its helpful to add the Functionality
  c) The Controller is the one in which all the logic is written and it is the one which is connected with the model it is helpful for creating a method which we can perform CRUD operation (CREATE,READ,UPDATE,DELETE) on the database 
  d) To connect the Database with Backend we use mongoose.connect("127.0.0.1/MERN") where 127.0.0.1 refers to the local host and MERN refers to the name of the Database 
  e)  Models for data structure, Views for UI, Controllers for handling requests. Then map each MERN component to these layers. For example, Mongoose models are the Models, Express routes and controllers are the Controllers, and React components are the Views.
  f)  We can use the following methods to connect the backend with the frontend : 
  i) Using the API (Application Programming Interface) we can connect the backend with the front : 

   Suppose we create a Functon to display Data and we want to display the data from the Front end whose api is (localHost:5174) and the backend api is (localhost:8000) both are from different API and to connect the backend with the frontend we can use the API and we can use cors() method
   ii) Using the cors() we can connect the backend with the frontend 
   iii) if we dont use the cors then the api from the frontend couldnt able to get data from the backend ( backend gets data from DATABASE) 
   iv) Routes are the formation which we create from different routes and Databases and we can use the routes to connect the backend with the frontend .
   v) Cors stands for cross origin resource sharing and it is used to connect the backend with the frontend and it is used to connect the Backend with frontend

    (X) ("/employees",empRoute); where the employees are the route which is helpful that will help us to frame the data from the backend to the frontend and empRoute is the controller .
    
    (X) Routes refers to the routing of elements from one flag to another for exampple the user is inside the employees section and inside the 
     employees  there are multiple sections like add employee, delete employee, update employee,display employee and beside every section or flag we have connected the Frontend with backend so as we connect on update employees the "/display" flag got triggered and the data is fetched from the backend and the data is displayed in the frontend.


 ==================================================================================================================================================
 ==================================================================================================================================================

  FOR NODE JS we can create a javascript file because the node.js file runs in the pure javscript

React (View): User visits /products page.

React Component: Calls axios.get('/api/products').

Express (Controller): Route /api/products triggers productController.getProducts().

Mongoose (Model): Fetches data from MongoDB using Product.find().

Response: Data sent back to React and rendered.



                           1. Node.js
a) Definition: A JavaScript runtime environment that executes code outside the browser (server-side).
b)Purpose: Powers the backend of a MERN app, handling APIs, database interactions, and server logic.

c) Key Features:

i) Non-blocking I/O: Handles multiple requests efficiently (event-driven architecture).
ii) NPM (Node Package Manager): Installs libraries/packages (e.g., Express, Mongoose).


                           2. Express.js
a) Definition: A minimal, flexible Node.js framework for building web servers and APIs.
b) Purpose: Simplifies routing, middleware integration, and HTTP request handling.
c) Key Features:
  i) Routing: Define endpoints (e.g., GET /api/products).
  ii) Middleware Support: Add layers like authentication or logging.

                           3.  Middleware

Middleware is a function which runs between the Client request and the Response given by the server so as at which we can authenticate,manipulate and modify the request before it reaches the final route handler
app level middleware prefer first when it comes to console
   Catergories of middleware 
   1) App level middleware  // runs everytime when the client gives any request to the server app.use()
   2) Path level middleware // it only runs only at a particular path ("/home",(req,res,next)=>{This is path level(home) Middleware},(req,res)={})  


   3) Third Party middleware
   4) In Built middleware


a) Definition: Functions that execute during the request-response cycle in Express.
b) Purpose: Modify requests/responses, handle auth, log data, or validate input.
c) Types:

 i) Built-in: express.json(), express.urlencoded() (parse request bodies).
ii) Third-party: cors, morgan (logging), helmet (security).
iii) Custom: Authentication checks, error handling.

                            4. MongoDB
a)Definition: A NoSQL database that stores data in flexible, JSON-like documents.
b)Purpose: Manage data for e-commerce apps (products, users, orders).
c)Key Features:

i) Collections: Equivalent to tables in SQL (e.g., users, products).
ii) Scalability: Handles unstructured data and scales horizontally.

                            5. React
a) Definition: A JavaScript library for building interactive user interfaces (frontend).
b) Purpose: Create dynamic, component-based UIs for e-commerce apps (product listings, carts).
c) Key Features:
   i) Components: Reusable UI pieces (e.g., ProductCard, Navbar).
  ii) State Management: Tools like Redux or Context API for global state (cart items, user auth).

 
=====================================================================================================================================================
===================================================================================================================================================


  // Middle ware is a keyword at which it runs in the middle of two operations and it takes three parameters req,res,next
  app.use(req,res,next) is a middleware we can use it with app.use that means its an app level middleware







    







*/