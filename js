Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});

const app = new Vue({
  el: '#app'
});

// BAR 
$('.open-overlay').click(function() {
  var overlay_navigation = $('.overlay-navigation'),
    nav_item_1 = $('nav li:nth-of-type(1)'),
    nav_item_2 = $('nav li:nth-of-type(2)'),
    nav_item_3 = $('nav li:nth-of-type(3)'),
    nav_item_4 = $('nav li:nth-of-type(4)'),
    nav_item_5 = $('nav li:nth-of-type(5)'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
  } else {
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
    nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
  }
})
