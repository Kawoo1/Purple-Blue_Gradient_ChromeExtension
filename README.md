# Purple-Blue_Gradient_ChromeExtension

This is a simple extension, currently untested, to create a purple-blue gradient. It is comprised of 4 files with each file serving a significant purpose. 
Each file and its purposes are explained below:
1) manifest.json - Defines extension properties. JSON is widely supported and is crucial for the API integration. This manifest file displays the different logos of the extension
   including the 16 x 16 pixel in browser display, the 48 x 48 extensions page display, and the 128 x 128 chrome web store display. It prompts the "popup.html" page which
   constructs the actual gradient by utilizing the CSS page and the javascript page.
2) popup.html - A simple HTML page that calls the CSS page "styles" and creates the /button/ which will apply the gradient.
3) styles.css - Assignes a liner gradient to the "body" as well as expands the /button/ to be more *pretty*.
4) popup.js - The most active file. This javascript file allows the extension to have its interactive properties, without it, the entire project just kind of sits and looks *pretty*
   The file is short and thats because it has one purpose, to handle the button click event. Without triggering the event, there is no gradient. When the event is triggered by the
   user, the gradient is applied. Simple enough.

This is the full extent of the chrome extension.
