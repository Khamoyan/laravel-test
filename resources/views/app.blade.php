@extends('layouts.appreact')

@section('content')
<div class="container">
    <a  href="{{ url('/') }}">
        {{ config('app.name', 'Laravel') }}
     </a>
  </div>

<div class="container">
     <div id='root'></div>
</div>
@endsection
