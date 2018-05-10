@extends('layouts.app')
@section('content')  

<div class="container"> 
  
  <h3>{{$company->name}}</h3>
  
  <div class="container">
    <table class="table">

     <tr>
        <th>Email:</th>
        <td>{{$company->email}}</td>
      </tr>
      <tr>
        <th>Web site:</th>
        <td>{{$company->website}}</td>
      </tr>
      <tr>
        <th>Logo:</th>
        <td><img src="http://laravel.development/storage/logos/{{$company->logo}}" style="height: 100px;width: 100px"></td>
      </tr>

    </table>

    <ul class="list-group">
      <h4>Employees</h4>
      @foreach($company['employees'] as $employee)
        <li class="list-group-item">{{$employee->first_name}} {{$employee->last_name}}
        </li>
      @endforeach  
   </ul>
  </div>     
</div>   

@endsection