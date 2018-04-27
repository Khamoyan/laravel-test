@extends('layouts.app')

@section('content')

@if(Auth::user()->id)
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
          <label for="inputPhone">Company</label>
          <input type="text" class="form-control" placeholder="Company" name="company">
          <input type="hidden" name="company_id">
        </div>

         <button type="submit" class="btn btn-primary">Create</button>
    </form>
</div>

<div style="height:40px "></div>

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
    @foreach($lists as $list)
      <tr>
        <td>{{ $list->id }}</td>
        <td><a href="/employees/{{$list->id}}">{{ $list->first_name }}</a></td>
        <td>{{ $list->last_name }}</td> 
        <td>{{ $list->email }}</td> 
        <td>{{ $list->phone }}</td>
       <td><button type="button" class="btn btn-info btn-lg edit" data-toggle="modal" data-target="#myModal" data-id={{$list->id}}> Edit</button></td>  
        <td><button type="sublit" class="btn btn-info btn-lg delete" data-toggle="modal" data-target="#myModalDelete" data-id={{$list->id}}> Delete</button></td>
      </tr> 
    @endforeach      
    </tbody>

  </table>
  {{ $lists->links()}}
 </div>
</div>
 
 <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
        <h4 class="modal-title">Edit Companies</h4>
         <form method="POST" action="" enctype="multipart/form-data" id="editForm">
          {{method_field('PUT')}}
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
              <label for="inputPhone">Company</label>
              <input type="text" class="form-control" placeholder="Company" name="company">
              <input type="hidden" name="company_id">
            </div>    
            <button type="submit" class="btn btn-primary">Edit</button>
          </form>
         </div>
         <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
         </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="myModalDelete" role="dialog">
    <div class="modal-dialog"> 
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <h4 class="modal-title">Delete Companies</h4>
          <form method="POST" action="" id="deleteForm" enctype="multipart/form-data" >
            {{method_field('delete')}}
            @csrf
            <button type="submit" class="btn btn-primary">Delete</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  @endif

<script type="text/javascript">
$(document).ready(function(){
  $('.edit').click(function(){
    $('#editForm').attr('action','/employees/'+$(this).data('id'));
  });
  $('.delete').click(function(){
    $('#deleteForm').attr('action','/employees/'+$(this).data('id'));
  });
})
</script>
@endsection