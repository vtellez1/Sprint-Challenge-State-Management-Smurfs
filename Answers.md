1. What problem does the context API help solve?

    Typically, you have to pass props from parent components down to child components but this can cause prop drilling. It can be cumbersome and unnecessary passing of props through some components that do not even use props. With context API, you can store data on a context object and get the data in the necessary component. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

     Actions are packets of information that hold an action type and it's related data. Reducers is the only place where we can update state. Our actions tell our reducers what and how to update our state. Store is a JavaScript object and everything that changes within our is represented here. Our app's state lives here and that is why it is known as a single source of truth in a redux application.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global while Component state is local. Redux would be an example of Application state where you can keep state in store and then a component can use that state. While Component state, you managa state in that component but can pass it down to child components. Typically, it would be good to use Application for large projects and component for smaller scale projects. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a seperate node package that allows us to make our redux flow asynchronous and changes our action-creators by allowing us to make API calls from our them.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    Both stat management systems (context API and Redux) are great and even better when you know how to use them. I was able to pick up on Redux and have a general understading (definetly have a lot to learn) and see how it can help with larger projects. Because we have worked more with useState, I would have to pick Context API. It works great for the projects we have been working on and I feel more comfortable with it. 
