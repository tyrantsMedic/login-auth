<template>
    <div class="container-form">
        <div class="title-form">
            <h1>Registration</h1>
        </div>
        <form class="registration-form">
            <div class="row">
                <div class="form-group col-6 mb-3">
                    <label for="firstName">First Name</label>
                    <input
                        type="firstname"
                        placeholder="Enter First Name"
                        class="form-control"
                    />
                </div>
                <div class="form-group col-6 mb-3">
                    <label for="lastName">Last Name</label>
                    <input
                        type="lastname"
                        placeholder="Enter last Name"
                        class="form-control"
                    />
                </div>
                <div class="form-group col-6 mb-3">
                    <label for="email">Email Address</label>
                    <input
                        placeholder="someone@email.com"
                        type="email"
                        class="form-control"
                        aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" class=""
                        >We'll never share your email with anyone else.</small
                    >
                </div>
                <div class="form-group col-6 mb-3">
                    <label for="password">Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        class="form-control"
                    />
                </div>
                <div class="form-group col-6 mb-3">
                    <label class="address1" for="address">Address Line 1</label>
                    <input
                        placeholder="House/Flat No, Street, etc."
                        type="address line1"
                        class="form-control"
                    />
                </div>
                <div class="form-group col-6 mb-3">
                    <label class="Address">Address Line 2</label>
                    <input
                        type="address line2"
                        placeholder="House/Flat No, Street, etc."
                        class="form-control"
                    />
                </div>

                <div class="form-group col-6 mb-3">
                    <label class="Address">Mobile No.</label>
                    <input
                        placeholder="441234567890"
                        type="number"
                        class="form-control"
                    />
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3 col">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Registration",
};
</script>

<style lang="scss"></style>
