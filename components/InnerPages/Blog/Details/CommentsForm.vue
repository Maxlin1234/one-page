<template>
  <div class="comments-from section-padding sub-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="text mb-60">
            <h3>Leave a comment</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <form id="contact-form" method="post" action="contact.php">
            <div class="messages"></div>
            <div class="controls row">
              <div class="col-lg-6">
                <div class="form-group mb-30">
                  <input id="form_name" type="text" name="name" placeholder="Name" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-30">
                  <input id="form_email" type="email" name="email" placeholder="Email" required />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mb-30">
                  <textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea>
                </div>
              </div>
              <div class="col-12 text-center mt-20">
                <button type="submit" class="butn-circle">
                  <span class="full-width">
                    <span class="full-width">Post A <br /> Comment</span>
                  </span>
                  <img src="/dark/assets/imgs/svg-assets/circle-star.svg" alt="" class="circle-star" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>