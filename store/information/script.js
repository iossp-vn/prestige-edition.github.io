!function (global, factory) {
    function loadDone () {
		global.removeEventListener('load', loadDone)
		factory(global)
	}
	global.addEventListener('load', loadDone)
}(this, function (global) {

	my("#preloader").remove()
	var firebase = global.firebase
   global.firebase = undefined
   delete global.firebase

  var firebaseConfig = {
	apiKey: "AIzaSyBLHGwZfk0XoRAtM6WwgqtKbEpAM4z6OSw",
	authDomain: "store-app-7e82d.firebaseapp.com",
	databaseURL: "https://store-app-7e82d.firebaseio.com",
	projectId: "store-app-7e82d",
	storageBucket: "store-app-7e82d.appspot.com",
	messagingSenderId: "465528518914",
	appId: "1:465528518914:web:f965f61aa254a4d8ab6a1b",
	measurementId: "G-KRD443YXML"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
var database = firebase.database()
var stateHistory = []

Vue.use(VueLazyload, {
	loading: "../../svgs/loading-2.1.svg"
})
Vue.use(global["vue-img"], {
    openOn: "click"
})

new Vue({
	el: "section#app",
	data: {
		inforApp: {
			app: {},
			hotTrens: [],
			pageY: 0,
			uid: "",
			isOpenDescription: false
		},
		viewer: searchParams()["viewer"]
	},
	methods: {
		loadFire: function (type, fn, $count) {

var e = database.ref("apps/")
if (type !== null)
	e = e.orderByChild("type")
	.equalTo(type)

e.limitToFirst($count).once(
	"value", fn.bind(this)
)

		},
		isEmptyObject: function(obj){
			if (typeof obj !== "object")
				return false
			for (var tmp in obj)
				return true
			return false
		},
		open: function () {
		    window.open.apply(window, arguments)
		},
		atob: function (e) {
		    return window.atob(e)
		},
		goto: function (package, data) {
			if (history.pushState)
				stateHistory.push(my.$clone(this.$data)), history.pushState(this.$data, null, "index.html?package=" + package + (!!this.viewer ? "&viewer=" + this.viewer : ""));
				//history.replaceState({a: 100}, "Information", "?package=" + package);
			this.$set(this.inforApp, "isOpenDescription", false)
			this.$set(this.inforApp, "app", {})
			this.$set(this.inforApp, "uid", "")
			this.$set(this.inforApp, "hotTrens", [])
			this.loadForce(data, package)
		},
		sizeof: function (e) {
			if (e > 1024 * 1024 * 1024)
	   			return round(e / 1024 / 1024 / 1024) + "GB"
			if (e > 1024 * 1024)
	   			return round(e / 1024 / 1024) + "MB"
			if (e > 1024)
	   			return round(e / 1024) + "KB"
			return e + "B"
		},
		marked: function (e) {
			if (e == null || e.undefined) return e
			return marked.apply(null, arguments)
		},
		equalKey: function (e) {
			return e + ""
		},
		back: function () {
			if (history.pushState)
				history.back()
			else my(window).trigger("popstate")
		},
		loadForce: function ($object, uid) {
			this.$set(this.inforApp, "app", $object)
			this.loadFire(
				this.inforApp
				.app.type,
				function (e) {
					var obj = my.$clone(e.val())
					if (obj[uid] !== undefined)
						delete obj[uid]
					this.$set(this.inforApp, "hotTrens", obj)
					
				}.bind(this),
				8
			)
		},
		getBtoa: function(base64) {
          var json = JSON.parse("{" + decodeURIComponent(atob(base64)) + "}")

          for ( var key in json )
             json[key] = btoa(encodeURIComponent(json[key]));

          return json
       }
	},
	mounted: function () {
		var uid = searchParams()
		uid = uid.package 
		
	stateHistory.push({
		hot: {
			swipers: [],
			appPreview: {},
			appHot: {},
			appPreviewCount: 20,
			pageY: 0,
			isLoaded: false
		},
		app: {
			swipers: [],
			appPreview: {},
			appHot: {},
			appPreviewCount: 20,
			pageY: 0,
			isLoaded: false
		},
		game:  {
			swipers: [],
			appPreview: {},
			appHot: {},
			appPreviewCount: 20,
			pageY: 0,
			isLoaded: false
		},
		search: {
			keyword: "",
			keywordHot: [],
			result: {},
			allData: {},
			pageY: 0,
			appPreview: {},
			appPreviewCount: 20
		},
		inforApp: {
			app: {},
			hotTrens: [],
			pageY: 0,
			uid: "",
			isOpenDescription: false
		},
		tabSelect: "hot",
		viewer: searchParams()["viewer"]
	})
		
		database.ref("apps/" + uid)
		.once("value", function (e){
		    if (e.val() === null || typeof e.val() !== "object")
				return my("#no-package").unAttr("hidden")
			my("#no-package").remove()
		    this.loadForce(e.val(), uid)
			this.$root.$el.removeAttribute("hidden")
		}.bind(this))
	}
})

my(window).on("popstate", function (e) {
   updateObject(stateHistory.pop())
})
})