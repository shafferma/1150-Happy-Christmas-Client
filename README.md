

# Cool Codepens I want to rip
- https://codepen.io/pyrografix/pen/VYeEMB
- https://codepen.io/s_crystal/pen/pJpMZX
- https://codepen.io/chrisgannon/pen/zyOjYw


## Highlights
- Utilities
    * ApiProvider - manages api calls using the axios client; automatically attaches the session token
- Sass
    * Installed `node-sass` to use `.scss` files in my components
- Photo Upload - Send a base64 String to Server
    * Logic is handled in `PhotoUpload.js`
    * When a User uploads a file we listen for the `onChange` event `line: 179`
    * When `onChange` fires we run the `handlePhoto` function
    * Because the input is of `type="file"` we can access the file uploaded by the User via `event.target.files[0]`
    * We then check the file size to ensure it is below 5mb
    * Once we have the `file` we use the `FileReader` Browser API read the file, it automatically converts the file to a base64 string. 
        * https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        * `fr.readAsDataURL(file)`
        * access result through `fr.onload` function and `fr.result`

