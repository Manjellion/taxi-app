# Taxi App

## Introduction
A mobile application developed using React-native with cloud based solutions using AWS Amplify services and Google Clouds Map API.
<br>
  Tools include:
<br>
  <ul>
    <li>AWS Amplify (React-Native, cocoapods for IOS)</li>
    <li>Google Maps, Autocomplete, Map Tracker (Map Tool)</li>
    <li>AWS Cognito (User Authentication)</li>
    <li>AWS AppSync (GraphQL)</li>
    <li>AWS Lambda (Function)</li>
    <li>AWS DynamoDB (NoSQL Database)</li>
    <li>AWS S3 Bucket (Storage)</li>
    <li>AWS CloudFormation (Cloud Infastructure and Version Control)</li>
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

## Adding Authentication/ AWS Cognito

Now that amplify is fully configured and initialised, we can go ahead and add authentication to create a login function;

To do this we need to put in the terminal: <code>amplify add auth</code>

The authentication in Amplify is handled by a service called cognito which handles user management services such as user pools.
Adding auth means we are making changes to our Amplify but not to the cloud server, for our cloud server to know our changes we need to do <code>amplify push</code> too send any changes to our cloud server. 

If you go to AWS management console and into AWS Amplify service we can now see our Application already initiated, click on the App and enable lauch AMplify studio, here we can make changes to Authentication, storage, functions our rest API and Data. 

### withAuthenticator

import withAuthenticator to our App.js or App.ts and export it  as withAuthenticator(App) this way it scopes and places a login component automatically which users now can sign up, login etc automatically, once the user has successfully logged in it renders the App component after. 

<code>import { withAuthenticator } from 'aws-amplify-react-native';</code>

![image](https://user-images.githubusercontent.com/77361838/180838693-8e0d56d7-004a-4f49-b71b-94cc469fbb22.png)
![image](https://user-images.githubusercontent.com/77361838/180985677-c6ee58c1-e763-4e0f-a643-1c469f9d7113.png)
![image](https://user-images.githubusercontent.com/77361838/180985730-ead444ad-52ac-40c8-bbb5-17f51259a09a.png)
![image](https://user-images.githubusercontent.com/77361838/180985782-bda2d6ce-4198-4c91-8fe2-cf480997ef50.png)

On a successfully sign in it will fully render the App.js component onto the screen allowing you to proceed to the main application

![image](https://user-images.githubusercontent.com/77361838/180985951-307ac219-d54d-4ff6-9839-a55017179074.png)

## Adding Cloud Storage (S3 Bucket)

To get started, we can go ahead and do this two ways, we can use the Amplify Studio manager to configure our storage and create a S3 Bucket storage automatically linking it to the AWS S3 Service or we can put in our CLI <code>Amplify add storage</code>

## Adding API (GraphQL)

To get started with the Backend inside our terminal in the file directory of our react native application we need to enter the following:

<code>amplify add api</code>

From there you will be given the option to either choose REST or GraphQL, I went ahead to picked GraphQL

## Creating Home Screen

Base formation of the homescreen is having a Map generated and automated by Google cloud console with a automtic warning message/ pop up to ware users on important messages. Following up is a touchable button which is displayed looking like a search, even so it is a button to open up the next page. Following that are two bookmark options, one is the last place the user visited and the other bookmark is for Home, Work etc. There will also be a side navigation bar which can be opened with the hamburger menu on the top left.

<img width="291" alt="Screenshot 2022-08-09 at 17 20 09" src="https://user-images.githubusercontent.com/77361838/183705048-74c0866c-a90c-4fb9-85a2-b66196da43f6.png">

## Search Screen

You will need to enable the features in google cloud console first and enable the API and also get your own API made in the credentials. For the search screen we will be using the Google places autocomplete search bar to automatically find data on the users search. To get started we need to install the packages into our react native files using NPM or Yarn: 

<code>npm i react-native-google-places-autocomplete</code>

### GeoLocation Request

We will need to request the user for premission to allow them to find their current locations and let them use it in the search screen.

## Choosing a Ride/ Search results Screen 

We again use the Map API from google clouds as our indicator to show the users origin to destination, we place two markers which will also place a route automatically to the fastest point using googles maps auto route. We will use the search screen to delivery results into the Results screen to show the users origin and destination.

<img width="251" alt="Screenshot 2022-08-10 at 15 48 29" src="https://user-images.githubusercontent.com/77361838/183933317-81216bd3-1d23-481c-b966-c0c90f8bc869.png">

## Hamburger/ Navigation Bar

Using the library React Navigation we are able to switch between screens, we also used this library to also create a side navigation for external menus such as settings and also profile. In the outcome we was able to create a side anvigation bar as shown below, for the profile the user registered details will go there and the picture they wan as the PP (Profile picuture). For this authentication we will be using AWS Amplify to configure it.

![Screenshot 2022-08-11 at 15 01 04](https://user-images.githubusercontent.com/77361838/184152378-c2a02325-056b-4cd4-b3d3-89e250d1ef2f.png)

## Post-confirmation Lambda Trigger 

As shown when setting up the Authentication in Amplify, we are really using the service Cognito so when a user Signs up we can manage user pools there. When a user signs up we want to automatically call a Lambda function to nest the information of the user into its event, inside Lambda also we will call DynamoDB and passing in all of the users metadata (data providing information of a single data) and storing it inside a database. We will also create a AWS AppSync GraphQL Api to allow other users to query there data but also allowing an admin to update it and also delete them. We will need to allow premissions in lambda by creating a new policy to the IAM user we created for this Amplify service. 

<img width="1004" alt="Screenshot 2022-08-12 at 10 59 42" src="https://user-images.githubusercontent.com/77361838/184332770-41f240a0-9104-427b-84c1-91566620fbb4.png">

If you sign up successfully, at the AWS management console inside Cognito you will be able to access and see the user signed up, to group it between admin and just end users we can create custom user groups for that. To check if our Lambda has been successfully and that it also has the permissions to transfer the meta data from the AWS Cognito to DynamoDB then we have successfully completed this feature. 

ref. <a href="https://www.youtube.com/watch?v=Sk9HMuAaTmQ&t=367s&ab_channel=NaderDabit">Nader Dabit</a>

### Adding Lambda Function

Using the CLI we input <code>add auth</code> and manually changing the set up so we can have a lambda function implemented with the action of post confirmation to our login page, this is to allow the lambda function to be triggered when the user completes logging in and automatically sends the meta data to our lambda function an stored as a <strong>event</strong>

### Add AppSync

Using CLI again input <code>add api</code> then we selected graphQL as our API and have it manually set so we are connected to DynamoDB services and launch a database for our login metadata to be transferred in. We will connect this in our Lambda Function where in our amplify folder inside function we can find custom.js file and edit our code there. To transfer data we will use DynamoDB to store the event inside a single Item and have it stored inside the database. For example: 

![Screenshot 2022-08-15 at 12 25 38](https://user-images.githubusercontent.com/77361838/184627070-12fcc43f-1343-4e81-afa2-9bee00e974fb.png)

Notice at the top of the code there is a file requirement known as aws-sdk, we require this so we have access to AWS software development kit allowing us access to using DynamoDB.

### Taxi and Order Models (GraphQL)

So far for the mobile application we have been using dummy data that was stored inside our asset files to register placements of the taxi's on our interactive google maps inside an array so we created a model inside our graphQL schema which will hold the information about our taxi's on our API therefore on the cloud. 

For the order model we needed to take in metadata from what our users will be choosing.

