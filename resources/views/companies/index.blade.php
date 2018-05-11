@extends('layouts.app')

@section('content')
    @if(Auth::user()->id)
        <div class="container">
            <div>
                <h2>Create </h2>
                <form method="POST" action="" enctype="multipart/form-data">
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

            <div style="height:40px"></div>

            <div class="row">
                <h2>Companies</h2>
                <table class="table">

                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Web Site</th>
                        <th>Logo</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>

                    <tbody>
                    @foreach($lists as $list)
                        <tr>
                            <td data-id={{$list->id}}>{{ $list->id }}</td>
                            <td><a href="/companies/{{$list->id}}">{{ $list->name }}</a></td>
                            <td>{{ $list->email }}</td>
                            <td><a href="https://{{($list->website) }}">{{ $list->website }}</a></td>
                            <td><img src="http://laravel.development/storage/logos/{{$list->logo}}"
                                     style="height: 100px;width: 100px"></td>
                            <td>
                                <button type="button" class="btn btn-info btn-lg edit" data-toggle="modal"
                                        data-target="#myModal" data-id={{$list->id}}> Edit
                                </button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-info btn-lg delete" data-toggle="modal"
                                        data-target="#myModalDelete" data-id={{$list->id}}> Delete
                                </button>
                            </td>
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
                        <h4 class="modal-title">Edit Company</h4>
                        <form method="POST" action="" id="editForm" enctype="multipart/form-data">
                            {{method_field('PUT')}}
                            @csrf
                            <div class="form-row">

                                <div class="form-group col-md-6">
                                    <label for="inputName">Company Name</label>
                                    <input type="text" class="form-control" placeholder="Name" name="name">
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="inputEmail">Email</label>
                                    <input type="email" class="form-control" placeholder="Email" name="email">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputWebSite">Web Site</label>
                                <input type="text" class="form-control" placeholder="websit.com" name="website">
                            </div>
                            <div class="form-group">
                                <input type="file" name="logo" value="">
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
                        <h4 class="modal-title">Delete Company</h4>
                        <form method="POST" action="" id="deleteForm" enctype="multipart/form-data">
                            {{method_field('delete')}}
                            @csrf
                            <button type="submit" class="btn btn-primary">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <script type="text/javascript">
        $(document).ready(function () {
            $('.edit').click(function () {
                $('#editForm').attr('action', '/companies/' + $(this).data('id'));
            });

            $('.delete').click(function () {
                $('#deleteForm').attr('action', '/companies/' + $(this).data('id'));
            });
        })
    </script>

@endsection


