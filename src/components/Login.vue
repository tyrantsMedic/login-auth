<template>
    <div class="container-form">
        <div class="title-form">
            <h1>Login</h1>
        </div>
        <form class="registration-form mt-5">
            <div class="form-group mb-3">
                <label class="input-label" for="email">Email Address</label>
                <input
                    placeholder="someone@email.com"
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                />
            </div>
            <div class="form-group mb-3">
                <label class="input-label" for="password">Password</label>
                <input
                    placeholder="Password"
                    type="password"
                    class="form-control"
                />
            </div>
            <div class="d-flex justify-content-around">
                <button type="submit" class="btn btn-primary">Submit</button>
                <router-link to="/register">
                    <a href="#">Not a user? Click Here</a>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script></script>

<style lang="scss"></style>
