@extends('layouts.app')

@section('content')
<div class="container">
  <div>
   <h2>Create </h2>
     <form method="POST" action="" enctype="multipart/form-data" >
      @csrf
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputName">Companies Name</label>
          <input type="text" class="form-control" placeholder="Name" name="name">
        </div>

        <div class="form-group col-md-6">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" placeholder="Email" name="email">
        </div>
      </div>
        <div class="form-group">
          <label for="inputWebSite">Web Site</label>
          <input type="text" class="form-control" placeholder="websit@websit.com" name="website">
        </div>
        <div class="form-group">
          <input type="file" name="logo" value="">
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
     </form>
</div>
<div style="height:30px"></div>

<div class="row">
  <h2>Companies list</h2>
  <table class="table">
    <thead>
      <tr>
        <th>id</th>
        <th>Companies Name</th>
        <th>Email</th>
        <th>Web Site</th>
        <th>Logo</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    @foreach($complist as $complist)
      <tr>
        <td>{{ $complist->id }}</td>
        <td>{{ $complist->name }}</td> 
        <td>{{ $complist->email }}</td> 
        <td>{{ $complist->website }}</td>
        <td><img src="{{url('storage/app/public/logos/'.$complist->logo)}}.jpg" style="height: 100px;width: 100px"></td>
        <td><button type="button"> Edit</button></td>  
        <td><button type="button"> Delete</button></td>
      </tr> 
       @endforeach      
    </tbody>
  </table>
 </div>
</div>

@endsection
