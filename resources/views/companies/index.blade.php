@extends('layouts.app')

@section('content')
<div class="container">
   <div>
   <h2>Create</h2>
     <form method="POST" action="{{route('companies.index')}}">
      @csrf
         <input type="text" name="name" placeholder="Companies Name">
         <input type="text" name="email" placeholder="Email">
         {{-- <input type="file" name="logo"> --}}
         <input type="text" name="website" placeholder="Web Site">
         <button type="submit" name=""> Add </button>
     </form>
   </div>
</div>
@endsection
