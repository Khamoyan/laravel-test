@extends('layouts.app')

@section('content')  
<div class="container"> 
<h3>{{$employees->first_name}}</h3>
  <div class="container">
    <table class="table">
     <tr>
        <th>Company Name:</th>
        <td>{{$companies->name}}</td>
      </tr>
      <tr>
        <th>Last Name:</th>
        <td>{{$employees->last_name}}</td>
      </tr>
      <tr>
        <th>Email:</th>
        <td>{{$employees->email}}</td>
      </tr>
      <tr>
        <th>Phone:</th>
        <td>{{$employees->phone}}</td>
      </tr>
    </table>
  </div>     
</div>   
@endsection