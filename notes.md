# react is a library
# in library we have freedom to do things
# framework is all abt rules
# state/UI manipulation
# JSX
# props
# hooks
# spa:single page application
# router
# BAAS->backend as as service
# npm->node package management
# npx->node pack executor

# create-react-app ->utility-->bulky
# npx create-react-app

# how to start a start script in package.json?
# npm run start

# how to start a build script in package.json?
# npm run build
# build folder will open

# npm create vite@latest
# npm install-> required packages will be installed
# npm run dev

# createRoot-->virtual DOM bnta hai only vo cheez change hoti hai jahan updation krni hai
# chrome: saara sdom reload krta hai.
# reconcialation is algo behind what is popularly called as virtual DOM

# primary goal of fiber is:
1. to pause work and come back to it later on
2. assign priority to different types of work
3. reuse previously completed work
4. abort work if it is no longher needed

# reconciliation : The algorithm React uses to diff one tree with another to determine which parts need to be changed.
# The reconciler does the work of computing which parts of a tree have changed; 
# the renderer then uses that information to actually update the rendered app.
# Fiber reimplements the reconciler. It is not principally concerned with rendering, though renderers will need to change to support (and take advantage of) the new architecture.
# Fiber is ground-up rewrite of reconciler

## diffing of list is performed using keys. Keys should be stable, predictable and unique.
# tailwindcss--> A utility-first CSS framework packed with classes like flex,pt-4,text-center

# ReactDOM.createRoot(document.querySelector('')).render()
# React.createElement()

## power of jsx : with help of js we can render html elements--> </App>

# jsx means mixing html to js.

# React.CreateElement()--> object hi leta hai...

# this created as variable--> {....}---> we say it evaluated expression so we cannot write if-else that is evaluated expression hi likh sakte hain

# Babel is a widely used JavaScript compiler that allows developers to use next-generation JavaScript (ES6 and beyond) syntax, which may not be fully supported by all browsers yet. Babel transpiles (converts) this modern JavaScript code into a backwards-compatible version (typically ES5) that can run in older browsers..

## hooks ke through hi deta update hoga

## import {useState} from React
## useState is hook
## const [counter,setcounter] =useState(15)
## setcounter ek function hai..

## reconcialation is algorithm behind what is populary known as virtual DOM.
## virtual DOM-->
# createRoot--> DOM like structure create krta hai.
## main DOM aur apne DOM ko compare krke updations krni.
## har UI ko ek dum se update krne ki jarurat nhi hai 

# chrome pura ka pura DOM phir se bnta hai that is page reload krta hai

## react fiber
# react fiber is implementation of React's Core algorithm
# aim is to not immediately do changes and thus increse its suitablilty for areas like animation
# key features-->ability to abort,pause or reuse work as new updates,ability to assign prioirity to various updates
# priorities--> an animation update>>update from data store


## ReactDOM.createRoot -> virtualDOM -> reconcialation -> fiber -> renderer

## har component ke pass access hota hai props
## function name(props){return(<></>)}
## props ek object hai so props.girl

## <name girl="diya"/>  
## function name(props){return(<></>)}
## function name({girl})

## onClick ko function chahiye
## onClick={()=>{}} best way to write ir
## onClick={function}->aise function ka reference jaayega pr parameter nhi de paayenge
## onClick={function()}->yahan function ki return value milegi function nhi

## useCallback is React Hook that lets you cache (memoririse) a function defination between re renders
## import {useCallback} from 'react'
## const func=useCallback(fn,dependencies)
## const: This indicates that the reference to the array (which contains the state value and the function to update it) won't change. 
## dependencies ek array hai..

## useEffect(setup,dependencies?)
# it is react hook that  helps to synchronise components with an external system

## useRef-> jb kisi ka reference lena hota hai

## state-component-specific memory is called state.

## Hooks are special functions..
## Use a state variable when a component needs to “remember” some information between renders.
## State variables are declared by calling the useState Hook.
## Hooks are special functions that start with use. They let you “hook into” React features like state.
## Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
## The useState Hook returns a pair of values: the current state and the function to update it.
## You can have more than one state variable. Internally, React matches them up by their order.
## State is private to the component. If you render it in two places, each copy gets its own state.

## react router
# Link-> <a> tag
# why we should not use <a> ? because whole page reloads in it so we use Link

# NavLink

## client side routing:: is only possible deu to Router and <Link>
Client-side routing means that when you navigate a website, the page doesn’t fully reload. Instead, JavaScript updates only parts of the page.

## <RouterProvider router={router} >
## array mein object de rhe the
## const router= createBrowserRouter([
    {
        path:'',
        element:'',
        children:[
            {},{},{}
        ]
    }
])

## const router=CreateBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<Layout/>}>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        </Route>
    )
)

## redux and redux tool kit(rtk)=>
## store
## reducer=> store ke ander ministore hote hain
## useSelector=> jb value store se select krni hai
## useDispatch=> jb value store se dispatch krni hai

## steeps using redux::
1. app folder mein store.js-> configureStore({})
2. Reducer ek functionality
    1.reducer mein aati hai properties or function
    2.slice reducer ka bada bhai hai
    3.nanoid->id generate krta hai
    4.initialState can be array and object
    5.createSlice()=>object as input leta hai
    6.her slice ka initialState hota hai
    7.addTodo mein 2 cheeze milengi ek hoga state aur ek hoga action ::: aaddTodo=(state,action)=>{}
    8.state->abhi ismein kya kya values ahi uska access degi
    9.action->kuch values chahiye kaam krne ke liye
    vo values action se milti hain.. jaise ki id action se milegi
    10.payload apne aap mein object hai
3. dispatch-> reducer ko use krte hoe store mein changes krta ahi
4. saari values store se milti hain
5. useSelector ek method hain ismein state ka access milta hai callback mein