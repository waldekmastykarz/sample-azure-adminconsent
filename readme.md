# Implementing admin consent in web applications using OAuth implicit flow

When building web applications using the implicit OAuth flow there are scenarios which require admin consent in order to make the application available for the organization. This is for example when the application requires permissions such as **Office 365 SharePoint Online/Run seach queries as user**.

This sample application shows how you can implement admin consent in a web application which uses the implicit OAuth flow.

## Running this sample

1. Clone this repository
1. Register a new web application in your Azure Active Directory
1. Copy the application ID
1. Grant the application the **Windows Azure Active Directory/Access the directory as the signed-in user** permission and some other permission that requires admin consent such as **Office 365 SharePoint Online/Run seach queries as user**
1. In the application's manifest enable implicit OAuth flow
1. In the `app/app.config.js` file change the value of the `appId` constant to the ID of your application as registered in the Azure Active Directory
1. Start the web application by typing in the command line `gulp serve-static`

## Completing the admin consent flow

1. In the web browser navigate to the web application
1. When prompted, login with a regular user who is not an admin. Because the web application requires admin consent you will get an error message.
1. Log out
1. Go to the web application again and this time login as admin
1. On the home page click the **admin** link
1. On the admin page click the **Signup organization** button. This will start the admin consent flow
1. After completing the admin consent you will return to the web application and should see the *Organization successfully subscribed* message. You should now be able to use the web application as a regular user.