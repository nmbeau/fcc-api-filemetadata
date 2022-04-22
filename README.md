# [File Metadata Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)

[My solution!](https://boilerplate-project-filemetadata.willbeaumont.repl.co/)

I added an API in `server.js` that uses the `multer` package to return file metadata from an upload.

## User Stories
* You should provide your own project, not the example URL.
* You can submit a form that includes a file upload.
* The form file input field has the `name` attribute set to `upfile`.
* When you submit a file, you receive the file `name`, `type`, and `size` in bytes within the JSON response.

## Code Logic
* Add log middleware to help with troubleshooting.
* Create MongoDB schema and init `Url` model.
* POST - `/api/shorturl`
    * Check if request URL is valid.
    * If new, add `original_url` to database.
        * Increment the max `short_url` and assign to new `original_url`.
    * Return `original_url` and `short_url`.
* GET - `/api/shorturl/:urlnum`
    * Lookup `original_url` using `short_url`.
    * Redirect to `original_url`.