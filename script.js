!function (global, factory) {
	function loadDone () {
		global.removeEventListener('load', loadDone)
		factory(global)
	}
	document.readyState === 'complete' ?
		factory(global)
		: global.addEventListener('load', loadDone)

}(this, function () {
my(".bg-main").bg("linear-gradient(133deg, rgb(62, 42, 254) 0%, rgb(59, 116, 247) 29%, rgb(59, 164, 244) 60%, rgb(57, 242, 237)) repeat scroll 0% 0% / auto padding-box border-box")
	
	app.removeAttribute("hidden")
	
var rqAnimate = 
	window.requestAnimationFrame || 		window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame || 
	window.msRequestAnimationFrame || 
	window.oRequestAnimationFrame || 
	function (e) {
		setTimeout(e, 100/6)
	}
function scroll (y, ry, x) {
	this.y = y
	this.vy = (ry - y) * .8 / 30
	this.ry = ry
	this.x = x
	this.draw = function () {
		scrollTo(this.x, this.y)
	}
	this.update = function () {
		this.draw()
		 this.vy += (this.ry - this.y) / 30
		 this.vy *= .8
		 this.y += this.vy
		if (~~(this.y - this.ry) == 0)
			return scrollTo(this.x, this.ry + 1)
		rqAnimate(this.update.bind(this))
	}
}

my.extend({
	scrollTo: function (el) {
		var y = my(document).scrollTop()
		 var _y = my(el).offset().top

		 new scroll(y, _y, 0).update()
	}
})

my(".bind-scroll")
.mclick(function (e) {
	e.preventDefault()
	my.scrollTo(
		my(this).attr("href")
	)
	my(".navbar .navbar-toggler")[0]
	.Collapse.hide()
}, { passitive: true })

var nav = my(".navbar.fixed-top")
var bgmain = my(".bg-main")

my(window).scroll(function () {
   var y = my(document).scrollTop()
	var elY, elH, $this

	nav.css("background-color", y + nav.innerHeight() > bgmain.innerHeight() ? "rgb(59, 164, 244)" : "")

	y < 0 && (y = 0)
	
	my(".bind-scroll")
	.each(function () {
		$this = my(this)
		
		elY = my($this.attr("href")).offset().top
		elH = my($this.attr("href")).innerHeight()
		if (y >= elY && y <= elY + elH)
			$this.closest(".nav-item").addClass("active")
		else $this.closest(".nav-item").removeClass("active")
	})
	
})
.trigger("scroll")
.load(function () {
	scrollTo(0, 0)
})

my(".install").mclick(function () {
   open("app.mobileconfig", "_self")
})
my(".use-now").mclick(function () {
   open("store/index.html", "_self")
})

	new Swiper('.swiper-container',{
	  autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	  },
	  scrollbar: {
		el: '.swiper-pagination',
		hide: true
	  },
	  infinite: true,
	  loop: true,
	  autoplay: true
	})
	new WOW().init();
})