@extends('layouts.app')

@section('content')  
<div class="container"> 
<h3>{{$companies->name}}</h3>
  <div class="container">
    <table class="table">
     <tr>
        <th>Email:</th>
        <td>{{$companies->email}}</td>
      </tr>
      <tr>
        <th>Web site:</th>
        <td>{{$companies->website}}</td>
      </tr>
       <tr>
        <th>Logo:</th>
        <td><img src="{{url('storage/app/public/logos/'.$companies->logo)}}" style="height: 100px;width: 100px"></td>
      </tr>
    </table>
    <ul class="list-group">
    <h4>Employees</h4>
    @foreach($employeess as $employees)
    <li class="list-group-item">{{$employees->first_name}} {{$employees->last_name}}
    </li>
    @endforeach
  
   </ul>
  </div>     
</div>   
@endsection