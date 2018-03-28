@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
            
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                    <ul class="nav navbar-nav">
                      <li class="active"><a href="#">Home</a></li>
                      
                      <li><a href={{url('companies')}}>Companies</a></li>
                      <li><a href={{url('employees')}}>Employees</a></li>
                    
                    </ul>
                  </div>
                </nav>
                
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
