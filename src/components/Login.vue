<template>
  <div class="title-form">
    <h1>Register Your Account</h1>
  </div>
  <div class="container-form">
    <form class="registration-form">
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          placeholder="someone@email.com"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input placeholder="Password" type="password" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script></script>

<style lang="scss">
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
.title-form {
  text-align: center;
  margin: 2rem 0 0 0;
}
.container-form {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: 80vh;
}
.registration-form {
  width: 100%;
  max-width: 400px;
  background: rgb(205, 203, 203);
  padding: 3rem;
  margin: 3rem 10rem;
  border-radius: 10px;
  box-shadow: 4px black;

  button {
    padding: 0.75rem;
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    margin: 1rem 45%;
    &:hover {
      background-color: #0056b3;
    }
  }
}
.form-group {
  margin: 0 0 1.5rem 0;

  label {
    margin: 0 0 0.5rem 0;
  }
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input::placeholder {
    font-style: italic;
    font-weight: 100;
    font-style: opacity 0.5;
  }
}
</style>
