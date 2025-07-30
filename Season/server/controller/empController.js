


const homePage = async(req,res)=>{
   req.session.name = "Akash",
   req.session.age = 23
   req.session.city = "Bhopal"
   req.session.login = true;
   res.send({msg:"Welcome"})

}

const datadisplay = async(req,res)=>{
    const name = req.session.name
    const age = req.session.age
    const city = req.session.city
    const login =  req.session.login
    
    res.send({name:name,age:age,city:city,login:login})

}

// Cross Origin resource sharing  we have to install cors package so that we can access the data from different HTTP 
//  For example in front end we are using localhost:5174 and in backend we are using 9000 so we have to install cors package
//  Cors package can be used to access data of different HTTP request



// Constants in Redux help us in easily finding all the usages of a particular functionality across our entire project when we are using an Integrated Development Environment (IDE). Using constants, we can avoid silly bugs caused because of typing errors or typos as it shows a "ReferenceError" whenever a typo is made


//  What are Reducers ?


// Reducers in Redux's architecture are pure functions that are used to take the previous state and an action and return the next state.

module.exports = {
    homePage,
    datadisplay
    
}