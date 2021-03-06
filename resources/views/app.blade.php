<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="w-full h-full">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Capoeira Map</title>

        <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet" />
        <link href="{{ mix('/css/app.css') }}" rel='stylesheet' />
        
    </head>

    <body class="w-full h-full antialiased">
        <div id="app" class="w-full h-full"></div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>

</html>
