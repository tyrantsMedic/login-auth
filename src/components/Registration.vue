<template>
  <div class="title-form">
    <h1>Register Your Account</h1>
  </div>
  <div class="container-form">
    <form class="registration-form">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="firstname" class="form-control" />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="lastname" class="form-control" />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          placeholder="someone@email.com"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input placeholder="Password" type="password" class="form-control" />
      </div>
      <div class="form-group">
        <label class="address1" for="address">Address Line 1</label>
        <input
          placeholder="House/Flat No, Street, etc."
          type="address line1"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="Address">Address Line 2</label>
        <input type="address line2" class="form-control" />
      </div>

      <div class="form-group">
        <label class="Address">Mobile No.</label>
        <input placeholder="441234567890" type="number" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Registration",
};
</script>

<style lang="scss">
.title-form {
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;
}
.container-form {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100vh;
}
.registration-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  background: rgb(205, 203, 203);
  padding: 3rem;
  margin: 3rem 10rem;
  border-radius: 10px;
  box-shadow: 4px black;
  justify-content: center;

  button {
    flex: 1 1 100%;
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
  display: flex;
  flex: 1 1 45%;
  flex-direction: column;
  padding: 0 0.5rem;

  label {
    padding: 0.5rem 0.5rem 0.5rem 0;
  }
  input {
    padding: 0.5rem 1rem;
  }
  input::placeholder {
    font-style: italic;
    font-weight: 100;
    font-style: opacity 0.5;
  }
}
</style>
