import React from "react";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <>
            <ReactToPdf targetRef={ref} filename="React-blogs.pdf">
                {({ toPdf }) => (
                    <button className="flex ml-auto py-2 px-3 text-lg font-bold bg-gray-400 mt-2 rounded-md text-white text-right" onClick={toPdf}>Create pdf</button>
                )}
            </ReactToPdf>
            <div className="p-5 w-[800px] h-full mx-auto" ref={ref} >
                <h1 className="text-center text-4xl font-bold mb-5" >Welcome to Our Blogs</h1>
                <div>
                    <h1 className="text-2xl font-bold">1. What are the differences between uncontrolled and controlled components?</h1>
                    <p>Controlled or uncontrolled are basically refers to how the component handles and updates its own state.</p>
                    <p className="text-lg font-bold my-2">Here are some key differences between uncontrolled and controlled components:</p>
                    <ul className="space-y-2">
                        <li>1. Uncontrolled components handle their own state internally, whereas controlled components require external state management.</li>
                        <li> 2. Uncontrolled components render their initial state based on their default props or initial state, whereas controlled components render their state based on the external props passed down to them.</li>
                        <li> 3. Uncontrolled components are typically simpler and require less code, whereas controlled components provide more fine-grained control and allow for more complex behavior.</li>
                        <li>4. Uncontrolled components may be easier to implement in some cases, but they can be harder to test and debug because their state is hidden from external code. Controlled components, on the other hand, are easier to test and debug because their state is managed externally and can be easily inspected and manipulated.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-6 mb-4">2. How to validate React props using PropTypes?</h1>
                    <p>1. First you have to install and import the PropTypes library</p>
                    <p>2.You have to define the PropTypes for your component.</p>
                    <p>3.The PropTypes library provides several built-in validators that can be used to specify the type of prop that is expected. like : string, number, bool, func, and arrayOf validators. </p>
                    <p>4. By using this and defining PropTypes for your components, you can catch errors early and make your code more reliable. It is a good practice to define PropTypes for all your components,</p>

                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-6">3. What is the difference between nodejs and express js?</h1>
                    <p className="mt-4">Node.js is a JavaScript runtime built on the V8 JavaScript engine that allows developers to run JavaScript code on the server-side, while Express.js is a framework built on top of Node.js that provides tools and features for building web applications and APIs. Node.js provides the building blocks for creating web servers and handling requests and responses, while Express.js provides a set of predefined methods and middleware functions for handling common web application tasks.</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-6">4.What is a custom hook, and why will you create a custom hook?</h1>
                    <p className="mt-4 mb-6">A custom hook is a function that allows you to reuse stateful logic across multiple components in a React application. Custom hooks are a way to abstract complex logic into reusable functions that can be used across different components.sometimes you may need to reuse complex stateful logic across multiple components, which can become repetitive and hard to maintain. This is where custom hooks come in. By creating a custom hook, you can encapsulate complex stateful logic into a reusable function that can be used across different components. Custom hooks allow you to share logic between components without having to rely on higher-order components or render props.</p>
                </div>
            </div>
        </>

    );
};

export default Blog;