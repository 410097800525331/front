$(document).ready(function () {
  const authModal = `
    <!-- Sign In -->
    <div class="sign_modal" id="sign_in_modal">
      <div class="sign_modal_overlay"></div>

      <div class="sign_modal_content">
        <button class="sign_close_btn">✕</button>

        <h2>Sign in</h2>

        <form class="login_form">
          <input type="text" placeholder="Id" required>
          <input type="password" placeholder="Password" required>
          <button type="submit" class="sign_submit_btn">Sign In</button>
        </form>

        <p class="sign_switch">
          Don’t have an account?
          <a href="#" id="go_signup">Join</a>
        </p>
      </div>
    </div>

    <!-- Sign Up -->
    <div class="sign_modal" id="sign_up_modal">
      <div class="sign_modal_overlay"></div>

      <div class="sign_modal_content signup_modal">
        <button class="sign_close_btn">✕</button>

        <h2>Sign up</h2>

        <form class="login_form">
          <input type="text" placeholder="Id" required>
          <input type="password" placeholder="Password" required>
          <input type="password" placeholder="Confirm Password" required>

          <button type="submit" class="sign_submit_btn">Create Account</button>
        </form>

        <p class="sign_switch">
          Already have an account?
          <a href="#" id="go_signin">Sign in</a>
        </p>
      </div>
    </div>
  `;

  $(".top").append(authModal);
});

// Sign In 열기
$(document).on("click", "#signin_btn", function (e) {
  e.preventDefault();
  $(".sign_modal").hide();
  $("#sign_in_modal").fadeIn(200);
  $("body").css("overflow", "hidden");
});

// Sign Up 열기
$(document).on("click", "#signup_btn", function (e) {
  e.preventDefault();
  $(".sign_modal").hide();
  $("#sign_up_modal").fadeIn(200);
  $("body").css("overflow", "hidden");
});

// 모달 닫기
$(document).on("click", ".sign_close_btn, .sign_modal_overlay", function () {
  $(".sign_modal").fadeOut(200);
  $("body").css("overflow", "");
});

// Sign In → Sign Up
$(document).on("click", "#go_signup", function (e) {
  e.preventDefault();
  $("#sign_in_modal").hide();
  $("#sign_up_modal").fadeIn(200);
});

// Sign Up → Sign In
$(document).on("click", "#go_signin", function (e) {
  e.preventDefault();
  $("#sign_up_modal").hide();
  $("#sign_in_modal").fadeIn(200);
});
