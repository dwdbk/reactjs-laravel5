<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Login status -->
        <meta name="login-status" content="{{ Auth::check() }}">
        <title>Laravel</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <input type="hidden" id="_token" value="{{ csrf_token() }}">
        <div id="example"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>
