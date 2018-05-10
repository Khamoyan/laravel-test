@extends('layouts.app')
@section('content')   

<div class="container"> 
  <h3>{{$employee->first_name}}</h3>
  <div class="container">
    <table class="table"> 
     <tr>
        <th>Company Name:</th>
        <td>{{$employee['company']->name}}</td>  
      </tr>
      <tr>
        <th>Last Name:</th>
        <td>{{$employee->last_name}}</td>
      </tr>
      <tr>
        <th>Email:</th>
        <td>{{$employee->email}}</td>
      </tr>
      <tr>
        <th>Phone:</th>
        <td>{{$employee->phone}}</td>
      </tr>
      
    </table>
  </div>     
</div> 

@endsection