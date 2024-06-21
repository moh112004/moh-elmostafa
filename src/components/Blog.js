import AppBar from "./AppBar";
import Footer from "./Footer";
import ReactHooks from "../logo.svg";
import BLogArticle from "./BlogArticle";
import { useParams } from "react-router-dom";
export default function Blog() {
  let { article_id } = useParams();
  let Artciles = {
    react_hooks: {
      image: ReactHooks,
      title: "React Hooks: useState and useEffect",
      children: (
        <>
          <h1>Introduction to React Hooks: useState and useEffect</h1>

          <h2>Introduction to React Hooks</h2>
          <p>
            React Hooks were introduced in React 16.8 to allow developers to use
            state and other React features without writing a class. They provide
            a more direct API to the React concepts you already know.
          </p>

          <h2>
            Understanding <code>useState</code>
          </h2>
          <p>
            The <code>useState</code> hook allows you to add state to functional
            components. It returns an array with two elements: the current state
            value and a function to update it.
          </p>
          <h3>Syntax and Usage</h3>
          <pre>
            <code>const [state, setState] = useState(initialState);</code>
          </pre>
          <h3>Example: Basic Counter</h3>
          <pre>
            <code>
              {`import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Counter;`}
            </code>
          </pre>

          <h2>
            Understanding <code>useEffect</code>
          </h2>
          <p>
            The <code>useEffect</code> hook lets you perform side effects in
            function components. It is a close replacement for{" "}
            <code>componentDidMount</code>,<code>componentDidUpdate</code>, and{" "}
            <code>componentWillUnmount</code>.
          </p>
          <h3>Syntax and Usage</h3>
          <pre>
            <code>
              {`useEffect(() => {
    // Side effect
    return () => {
        // Cleanup
    };
}, [dependencies]);`}
            </code>
          </pre>
          <h3>Example: Fetching Data from an API</h3>
          <pre>
            <code>
              {`import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? 'Loading...' : <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>}
        </div>
    );
}

export default DataFetcher;`}
            </code>
          </pre>

          <h2>Practical Examples</h2>
          <p>
            Combining <code>useState</code> and <code>useEffect</code> in a
            single component allows for powerful and dynamic UIs. Here’s an
            example project building a to-do list with hooks:
          </p>
          <pre>
            <code>
              {`import React, { useState, useEffect } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        // Load initial todos from an API or local storage
        const initialTodos = [{ id: 1, text: 'Learn Hooks' }];
        setTodos(initialTodos);
    }, []);

    const addTodo = () => {
        const todo = { id: todos.length + 1, text: newTodo };
        setTodos([...todos, todo]);
        setNewTodo('');
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        </div>
    );
}

export default TodoList;`}
            </code>
          </pre>

          <h2>Common Pitfalls and Best Practices</h2>
          <p>
            When using <code>useEffect</code>, remember to manage dependencies
            correctly to avoid infinite loops. Always refer to the{" "}
            <a href="https://reactjs.org/docs/hooks-intro.html">
              official React documentation
            </a>{" "}
            for the latest best practices.
          </p>

          <h2>Conclusion</h2>
          <p>
            React Hooks simplify state and side-effect management in functional
            components. Understanding and utilizing <code>useState</code> and{" "}
            <code>useEffect</code> effectively can greatly enhance your React
            applications.
          </p>
        </>
      ),
    },
    node_js_and_express: {
      title: "Getting started with React.js and Express",
      image: ReactHooks,
      children: (
        <>
          <h1>Getting Started with Node.js and Express</h1>

          <h2>Introduction to Node.js and Express</h2>
          <p>
            Node.js is a runtime environment that allows you to run JavaScript
            on the server-side. Express is a web application framework for
            Node.js, designed for building web applications and APIs.
          </p>

          <h2>Setting up the Development Environment</h2>
          <p>
            First, install Node.js from the official{" "}
            <a href="https://nodejs.org/">Node.js website</a>. After installing
            Node.js, you can create a new project:
          </p>
          <pre>
            <code>
              {`mkdir my-express-app
    cd my-express-app
    npm init -y`}
            </code>
          </pre>
          <p>Then, install Express:</p>
          <pre>
            <code>npm install express</code>
          </pre>

          <h2>Creating a Basic Express Server</h2>
          <p>
            Create a file named <code>app.js</code> and set up a basic server:
          </p>
          <pre>
            <code>
              {`const express = require('express');
    const app = express();
    const port = 3000;
    
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    app.listen(port, () => {
        console.log(\`Example app listening at http://localhost:\${port}\`);
    });`}
            </code>
          </pre>

          <h2>Handling Routes and Requests</h2>
          <p>
            To handle different routes and requests, you can define additional
            routes:
          </p>
          <pre>
            <code>
              {`app.get('/about', (req, res) => {
        res.send('About Page');
    });
    
    app.get('/contact', (req, res) => {
        res.send('Contact Page');
    });`}
            </code>
          </pre>

          <h2>Connecting to a Database (Optional)</h2>
          <p>
            To connect to a database, you can use libraries like Mongoose for
            MongoDB. Here’s a simple example:
          </p>
          <pre>
            <code>
              {`npm install mongoose
    
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true });
    
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        name: String,
        email: String,
    });
    
    const User = mongoose.model('User', UserSchema);
    
    app.get('/users', async (req, res) => {
        const users = await User.find();
        res.send(users);
    });`}
            </code>
          </pre>

          <h2>Deploying the Server (Optional)</h2>
          <p>
            For deploying your Express application, you can use services like
            Heroku, Vercel, or DigitalOcean. Check the official documentation of
            each service for deployment steps.
          </p>
        </>
      ),
    },
    java_script_promise: {
      title: "Understanding JavaScript Promises and Async/Await",
      image: ReactHooks,
      children: (
        <>
          <h1>Understanding JavaScript Promises and Async/Await</h1>

          <h2>What are Promises?</h2>
          <p>
            Promises are a way to handle asynchronous operations in JavaScript.
            A promise represents an operation that hasn't completed yet but is
            expected in the future.
          </p>

          <h2>Creating and Using Promises</h2>
          <p>Here’s how you create and use a basic promise:</p>
          <pre>
            <code>
              {`const myPromise = new Promise((resolve, reject) => {
    // Do some async operation
    let success = true; // or false based on the operation
    if (success) {
        resolve('Operation was successful');
    } else {
        reject('Operation failed');
    }
});

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});`}
            </code>
          </pre>

          <h2>Chaining Promises</h2>
          <p>
            You can chain multiple <code>then</code> methods to handle a
            sequence of asynchronous operations:
          </p>
          <pre>
            <code>
              {`myPromise
    .then(result => {
        console.log(result);
        return anotherPromise;
    })
    .then(anotherResult => {
        console.log(anotherResult);
    })
    .catch(error => {
        console.log(error);
    });`}
            </code>
          </pre>

          <h2>Introduction to Async/Await</h2>
          <p>
            Async/await is syntactic sugar built on top of promises, making
            asynchronous code look and behave more like synchronous code. To use
            it, you need to declare a function as <code>async</code>.
          </p>
          <h3>Basic Example</h3>
          <pre>
            <code>
              {`async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchData();`}
            </code>
          </pre>

          <h2>Error Handling in Async/Await</h2>
          <p>
            Error handling in async/await is done using <code>try/catch</code>{" "}
            blocks:
          </p>
          <pre>
            <code>
              {`async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchData();`}
            </code>
          </pre>

          <h2>Common Pitfalls and Best Practices</h2>
          <p>
            - Always handle errors in promises and async/await functions.
            <br />
            - Avoid mixing promises and async/await; stick to one for
            readability.
            <br />- Use <code>Promise.all</code> to wait for multiple promises
            to resolve.
          </p>

          <h2>Conclusion</h2>
          <p>
            Understanding promises and async/await is crucial for handling
            asynchronous operations in JavaScript. Practice and refer to the{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises">
              MDN documentation
            </a>{" "}
            for more examples and detailed explanations.
          </p>
        </>
      ),
    },
    restful_apis_with_flask: {
      title: "Building RESTful APIs with Flask",
      image: ReactHooks,
      children: (
        <>
          <h1>Building RESTful APIs with Flask</h1>

          <h2>Introduction to Flask</h2>
          <p>
            Flask is a lightweight WSGI web application framework in Python. It
            is designed to make getting started quick and easy, with the ability
            to scale up to complex applications.
          </p>

          <h2>Setting Up the Environment</h2>
          <p>First, install Flask using pip:</p>
          <pre>
            <code>pip install Flask</code>
          </pre>

          <h2>Creating a Basic Flask Application</h2>
          <p>
            Create a file named <code>app.py</code> and set up a basic Flask
            server:
          </p>
          <pre>
            <code>
              {`from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)`}
            </code>
          </pre>

          <h2>Creating RESTful Routes</h2>
          <p>
            To create RESTful routes, define functions for each endpoint and use
            the appropriate HTTP methods:
          </p>
          <pre>
            <code>
              {`from flask import request, jsonify

@app.route('/api/items', methods=['GET'])
def get_items():
    items = [{'id': 1, 'name': 'Item 1'}, {'id': 2, 'name': 'Item 2'}]
    return jsonify(items)

@app.route('/api/items', methods=['POST'])
def create_item():
    new_item = request.json
    # Add new_item to your database
    return jsonify(new_item), 201`}
            </code>
          </pre>

          <h2>Connecting to a Database (Optional)</h2>
          <p>
            To connect to a database, you can use libraries like SQLAlchemy.
            Here’s a simple example:
          </p>
          <pre>
            <code>
              {`from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)

@app.route('/api/items', methods=['POST'])
def create_item():
    new_item = Item(name=request.json['name'])
    db.session.add(new_item)
    db.session.commit()
    return jsonify(new_item), 201`}
            </code>
          </pre>

          <h2>Deploying the API (Optional)</h2>
          <p>
            For deploying your Flask application, you can use services like
            Heroku, Vercel, or DigitalOcean. Check the official documentation of
            each service for deployment steps.
          </p>

          <h2>Conclusion</h2>
          <p>
            Flask makes it simple to create RESTful APIs. Understanding the
            basics and using libraries like SQLAlchemy for database interactions
            can help you build powerful web applications. Refer to the{" "}
            <a href="https://flask.palletsprojects.com/">
              official Flask documentation
            </a>{" "}
            for more details.
          </p>
        </>
      ),
    },
    css_grid_vs_flexbox: {
      title: "CSS Grid vs. Flexbox: Which One Should You Use?",
      image: ReactHooks,
      children: (
        <>
          <h1>CSS Grid vs. Flexbox: Which One Should You Use?</h1>

          <h2>Introduction to CSS Grid and Flexbox</h2>
          <p>
            CSS Grid and Flexbox are two powerful layout systems in CSS. Both
            offer unique features for creating complex and responsive web
            designs.
          </p>

          <h2>Understanding CSS Grid</h2>
          <p>
            CSS Grid is a two-dimensional layout system for the web. It allows
            you to create grid-based layouts with rows and columns.
          </p>
          <h3>Basic Syntax</h3>
          <pre>
            <code>
              {`display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;`}
            </code>
          </pre>
          <h3>Example</h3>
          <pre>
            <code>
              {`.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}

.item {
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
}`}
            </code>
          </pre>

          <h2>Understanding Flexbox</h2>
          <p>
            Flexbox is a one-dimensional layout system. It is designed for
            laying out items in a row or a column.
          </p>
          <h3>Basic Syntax</h3>
          <pre>
            <code>
              {`display: flex;
flex-direction: row;`}
            </code>
          </pre>
          <h3>Example</h3>
          <pre>
            <code>
              {`.container {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.item {
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
}`}
            </code>
          </pre>

          <h2>When to Use CSS Grid</h2>
          <p>
            Use CSS Grid when you need a two-dimensional layout. It is ideal for
            creating complex layouts with rows and columns.
          </p>
          <ul>
            <li>Building page layouts</li>
            <li>Creating grid-based designs</li>
            <li>Responsive design with complex layouts</li>
          </ul>

          <h2>When to Use Flexbox</h2>
          <p>
            Use Flexbox for one-dimensional layouts. It is perfect for aligning
            items within a container, either in a row or a column.
          </p>
          <ul>
            <li>Navbars</li>
            <li>Centering elements</li>
            <li>Simple layouts</li>
          </ul>

          <h2>Combining Grid and Flexbox</h2>
          <p>
            You can combine CSS Grid and Flexbox to create more complex and
            responsive layouts. Use Grid for the overall layout and Flexbox for
            aligning items within the grid cells.
          </p>
          <pre>
            <code>
              {`<div className="grid-container">
    <div className="grid-item">
        <div className="flex-container">
            <div className="flex-item">Item 1</div>
            <div className="flex-item">Item 2</div>
        </div>
    </div>
    <!-- more grid items -->
</div>`}
            </code>
          </pre>

          <h2>Conclusion</h2>
          <p>
            Both CSS Grid and Flexbox are essential tools for modern web design.
            Choose the right tool based on your layout needs: Grid for
            two-dimensional layouts and Flexbox for one-dimensional layouts.
            Refer to the{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">
              MDN documentation on CSS Grid
            </a>{" "}
            and{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">
              Flexbox
            </a>{" "}
            for more details.
          </p>
        </>
      ),
    },
  };
  function RenderedArticle() {
    if (article_id in Artciles) {
      return (
        <BLogArticle
          title={Artciles[article_id].title}
          image={Artciles[article_id].image}
        >
          {Artciles[article_id].children}
        </BLogArticle>
      );
    } else {
      return <div></div>;
    }
  }
  return (
    <>
      <AppBar />
      <RenderedArticle />
      <Footer />
    </>
  );
}
