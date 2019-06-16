export default html => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redux: End to End</title>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="/assets/app.css">
  </head>
  <body>
  <div id="app">${html}</div>
  </body>
  <script src="/assets/bundle.js"></script>
</html>
`;
