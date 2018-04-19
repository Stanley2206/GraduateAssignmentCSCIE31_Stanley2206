# Assignment # Graduate Credit Assignment by Timo

I try to show how it is possible to save encrypted values to a database. I know that it is only a very simple approach.

Description:
The user has the opportunity to login to the page directly, if the user does not have a valid account, it is possible to create a new user. The link for this task is provided on the root page.

After creating a new User, the application redirects to the root page again. If the user enters valid credentials, a new page with the username is shown. If not, an "Access Denied" page is displayed, a link back to the root page is provided as well.

New Thing:
The npm module bcrypt which is used for the encryption.

Possible Assignment for new Students:
Build an application which saves encrypted values to a database and make sure that the application is able to verify that plain text values are equal to the saved hash values. A small assignment could be if the whole application is provided, the only thing left to be done is the implementation of the bcrypt module. A bigger assignment could be the development of the whole application from scratch.
