# Unhandled Error in Express.js Route Handler

This repository demonstrates an uncommon error in Express.js route handlers where an unhandled error occurs when a user is not found.  The original code attempts to send a 404 status, but lacks proper error handling if the database query fails to find the user.  The solution provides improved error handling that gracefully manages the 404 scenario and also captures potential database errors.

## Bug
The bug lies in how the route handler manages the absence of a user.  If the database query fails to find a user with the given ID, the `user` variable will be `undefined` or `null`, leading to an error rather than a proper 404 response.  This is not always caught by basic testing unless edge cases are explicitly considered.