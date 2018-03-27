@extends('layouts.app')

@section('content')
<div class="container">
  <div>
   <h2>Create </h2> 
     <form method="POST" action="" >
     @csrf 
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputFname">First Name</label>
          <input type="text" class="form-control" placeholder="First Name" name="first_name">
        </div>

        <div class="form-group col-md-6">
          <label for="inputLname">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" name="last_name">
        </div>
      </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" placeholder="email@gmail.com" name="email">
        </div>
        <div class="form-group">
          <label for="inputPhone">Phon</label>
          <input type="text" class="form-control" placeholder="099******" name="phone">
        </div>
        <div class="form-group">
          <label for="inputPhone">Compani</label>
          <input type="text" class="form-control" placeholder="Compani" name="compani_id">
        </div>
         <button type="submit" class="btn btn-primary">Create</button>
     </form>
</div>
<div style="height:30px "></div>

<div class='row'>
  <h2>Employees list</h2>
  <table class="table">
    <thead>
      <tr>
        <th>id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    @foreach($list as $list)
      <tr>
        <td>{{ $list->id }}</td>
        <td>{{ $list->first_name }}</td>
        <td>{{ $list->last_name }}</td> 
        <td>{{ $list->email }}</td> 
        <td>{{ $list->phone }}</td>
        <td><button type="button"> Edit</button></td>  
        <td><button type="button"> Delete</button></td>
      </tr> 
       @endforeach      
    </tbody>
  </table>
 </div>
</div>
@endsection
