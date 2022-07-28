# Taxi App

## Introduction
A mobile application in general purpose of Taxi industry applied using cloud computing tools from AWS.
<br>
  Tools include:
<br>
  <ul>
    <li>AWS Amplify (React-Native)</li>
    <li>AWS Locations Service (Map Tool)</li>
    <li>AWS API Gateway (API tool)</li>
    <li>AWS Lambda (Rest API - NodeJS)</li>
    <li>AWS DynamoDB (NoSQL Database)</li>
  </ul>
  
## Creating 
### Prerequisites
Before installing and developing we need the follwoing installed:
1. Have:
<ul>
  <li>Node.js v14.x or later</li>
  <li>npm v6.14.4 or later</li>
  <li>git v2.14.1 or later</li>
</ul>

2. Initialize a new React Native application. There are two ways to do this:

  - Expo CLI - Easier for new React Native developers
  - React Native CLI - If you are already familiar with mobile development, enables you to build native code into your project.

3. Sign up for AWS account - <a href="https://portal.aws.amazon.com/billing/signup#/start/email">Create AWS Account</a>

4. Install and configure the Amplify CLI 
    
    Using terminal:<br>
   <code>npm install -g @aws-amplify/cli</code>
   
   then:
   
  <code>amplify configure</code>
   
  Once you're signed in, Amplify CLI will ask you to create an IAM user:
   
  <code>Specify the AWS Region</code><br>
  <code>? region:  # Your preferred region</code><br>
  <code>Specify the username of the new IAM user:</code><br>
  <code>? user name:  # User name for Amplify IAM user</code><br>
  <code>Complete the user creation using the AWS console</code><br>

### Create a new React Native app

<code>npm install -g expo-cli</code>
<code>expo init my-app</code>

choose a blank template with the language you are familiar with, for me its JavaScript

### Install Amplify Libraries

<code>npm install aws-amplify aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage @react-native-picker/picker</code>

then do amplify init to initialise a backend (e.t.c S3 Bucket) and produce a template on <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html">CloudFormation</a>:

<code>amplify init</code>

Finally, open App.js(Expo) and add the follwoing lines of code at top to complete the configuration to Amplify into your code base, do this by importing the following:

<code>import { Amplify } from 'aws-amplify'</code><br>
<code>import awsconfig from './src/aws-exports'</code><br>
<code>Amplify.configure(awsconfig)</code><br>

## Adding Authentication 

Now that amplify is fully configured and initialised, we can go ahead and add authentication to create a login function;

To do this we need to put in the terminal: <code>amplify add auth</code>

Adding auth means we are making changes to our Amplify but not to the cloud server, for our cloud server to know our changes we need to do <code>amplify push</code> too send any changes to our cloud server. 

If you go to AWS management console and into AWS Amplify service we can now see our Application already initiated, click on the App and enable lauch AMplify studio, here we can make changes to Authentication, storage, functions our rest API and Data. 

### useAuthentication

import useAuthentication to our App.js or App.ts and export it  as useAuthentication(App) this way it scopes and places a login component automatically which users now can sign up, login etc automatically, once the user has successfully logged in it renders the App component after. 

![image](https://user-images.githubusercontent.com/77361838/180838693-8e0d56d7-004a-4f49-b71b-94cc469fbb22.png)
![image](https://user-images.githubusercontent.com/77361838/180985677-c6ee58c1-e763-4e0f-a643-1c469f9d7113.png)
![image](https://user-images.githubusercontent.com/77361838/180985730-ead444ad-52ac-40c8-bbb5-17f51259a09a.png)
![image](https://user-images.githubusercontent.com/77361838/180985782-bda2d6ce-4198-4c91-8fe2-cf480997ef50.png)

On a successfully sign in it will fully render the App.js component onto the screen allowing you to proceed to the main application

![image](https://user-images.githubusercontent.com/77361838/180985951-307ac219-d54d-4ff6-9839-a55017179074.png)

## Adding API (GraphQL)

To get started with the Backend inside our terminal in the file directory of our react native application we need to enter the following:

<code>amplify add api</code>

From there you will be given the option to either choose REST or GraphQL, I went ahead to picked GraphQL
