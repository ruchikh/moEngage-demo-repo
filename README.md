# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### To create Ngrok url to run app locally

To set up Ngrok to run your app locally and create a tunnel to access it over the internet, follow these steps:

Sign up and Authenticate with Ngrok:

Go to https://ngrok.com/docs/getting-started/ and sign up for a Ngrok account if you haven't already.
After signing up, create an authentication token in your Ngrok account settings.
Create Ngrok URL:

Once you have your authentication token, use it to create a Ngrok URL.
Run the command ngrok http 9000 --host-header="localhost:9000" in your terminal.
This command starts Ngrok and creates a secure tunnel to your local server running on port 9000.
Use Ngrok URL in Capacitor Configuration:

After running the command, you will see a Ngrok URL generated in your terminal.
Copy this URL and use it in your capacitor.config.json file under the "server" section.
Set the URL value to the Ngrok URL you obtained, for example:
json
Copy code
"server": {
"url": "https://your-ngrok-url.ngrok.io",
"cleartext": true
}
This allows Capacitor to use the Ngrok URL when accessing your local server during development.
Access Ngrok Dashboard:

You can also access the Ngrok dashboard at https://dashboard.ngrok.com/ to manage your tunnels.
Your Ngrok URL will be available under the "Endpoints" section of the dashboard.
By following these steps, you'll be able to run your app locally and access it over the internet using Ngrok. This is especially useful for testing and demo purposes.

### Run below command in terminal to run the app locally

ngrok http 9000 --host-header="localhost:9000"
ngrok http --host-header=rewrite 9000
