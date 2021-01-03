<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="w-full h-full">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Capoeira Map</title>

        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        <link href="{{ mix('/css/app.css') }}" rel='stylesheet' />
        <script src="{{ mix('/js/app.js') }}"></script>

    </head>
    <body class="antialiased w-full h-full">
            <div id="ui" class="absolute top-0 left-0 m-5 z-10 w-4/12">
            
                <form method="get" action="" class="bg-white p-5 rounded-md flex flex-col md:flex-row items-center justify-items-center">
                    <input type="text" name="query" class="border-gray-300 border-2 rounded-md mr-3 p-3 flex-1" placeholder="Buscar para Grupo, Mestre ou Organizacão" value="" />
                    <input type="submit" value="Search" class="bg-green-500 text-white text-lg rounded-md p-3 cursor-pointer" /> 
                </form>
            
            </div>
            <div id="capoeira-map" class="w-full h-full"></div>
    </body>
</html>
