import React from 'react';
 
  function Content() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Train schedule</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">AllTrain</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SingleTrain</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
   
  export default Content;