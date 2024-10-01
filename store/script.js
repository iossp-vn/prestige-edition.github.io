!function (global, factory) {
	function loadDone () {
		global.removeEventListener('load', loadDone)
		factory(global)
	}
	document.readyState === 'complete' ?
		factory(global)
		: global.addEventListener('load', loadDone)
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function limitObject (obj, e) {
	var count = 0, _obj = {}, key
	for (key in obj) {
		_obj[key] = obj[key]
		if (++count == e)
			break
	}
	
	return _obj
}

function eccent (str) {
	return str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
	.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
	.replace(/ì|í|ị|ỉ|ĩ/g, "i")
	.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
	.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
	.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
	.replace(/đ/g, "d")
	.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")
	.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")
	.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")
	.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")
	.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")
	.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")
	.replace(/Đ/g, "D");
}
function nosp (str) {
	return (str + "").replace(/ /g, "")
}
my.filter = function (obj, fn) {
	var _ = {}
	my.each(obj, function (key) {
		if (fn.call(obj[key], key, obj[key]) === true)
			_[key] = obj[key]
	})
	return _
}
function isSpLocal() {
	if (typeof global.Storage === "undefined")
		return false
	try {
		global.localStorage.getItem("")
		return true
	}
	catch (e) { return false }
}

var database = firebase.database()
var stateHistory = []

console.error = console.warn = function (e, f, g, h) {
if (e.toString().indexOf("database") === -1) console.log(e + "")
}

Vue.use(VueLazyload, {
	loading: "../svgs/loading-2.1.svg"
})
Vue.use(global["vue-img"], {
	openOn: "click"
})

Vue.component("preview-app", {
	template: "#preview-app",
	props: {
		appPreview: Object
	},
	methods: {
		equalKey: function (val) {
			return val + ""
		},
		sizeof: function (e) {
			return this.$root
			.sizeof(e)
		}
	}
})
var app = new Vue({
	el: "#app",
	data: {
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
			history: [],
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
	},
	components: {
		"carousel-3d": Carousel3d.Carousel3d,
		"slide": Carousel3d.Slide,
		"page-spa": {
			template: "#page-spa",
			props: {
				swipers: Array,
				appPreview: {
					type: Object,
					default: {}
				},
				appsHot: {
					type: Object,
					default: {}
				},
				isLoaded: Boolean
			},
			components: {
				"carousel-3d": Carousel3d.Carousel3d,
				 "slide": Carousel3d.Slide,
			},
			methods: {
				equalKey: function (val) {
					return val + ""
				}
			}
		}
	},
	watch: {
		"search.history": function (newVal) {
			if ( isSpLocal() )
				localStorage["history-search"] = JSON.stringify(newVal)

		}
	},
	methods: {
		switchT: function (tabClick) {
		   this[this.tabSelect]
			.pageY = my("body")
						.scrollTop()
			this.tabSelect = tabClick
			
			my([window, document])
			.scrollTop(this[
				this.tabSelect
			].pageY)
		},
		loadFire: function (type, fn, $count) {

var e = database.ref("apps/")
if (type !== null)
	e = e.orderByChild("type")
	.equalTo(type)

e.limitToFirst($count).once(
	"value", fn.bind(this)
)

		},
		load: function ($proto) {
		
this[$proto].isLoaded = false

this.loadFire($proto == "hot" ? null : $proto, function(e) {

	if (JSON.stringify(e.val()) === JSON.stringify(this[$proto].appPreview))
		return this[$proto].isLoaded = undefined
	
	this[$proto].appPreview = e.val()
	this[$proto].appHot = limitObject( e.val(), 8 )
	
	this[$proto].isLoaded = true
	this[$proto].appPreviewCount += 20
}, this[$proto].appPreviewCount)

		},
		searchUseKeywordHot: function (key) {
			this.search.keyword = key.getAttribute("data-value")
			this.searchPlease()
		},
		searchPlease: function () {
		
			if (this.search.history
			.indexOf(
				this.search.keyword
			) === -1) {
				this.search.history.length > 5 && this.search.history.pop()
				this.search.history
				.unshift(this.search.keyword)
			}
			
			this.$refs.inputSearch
			.blur()
			new my.promise(function (e) {
				if (this.isEmptyObject(this.search.allData))
					database
					.ref("apps/")
					.once("value", function (f) {
this.search.allData = f.val()
						e.done()
					}.bind(this))
				else e.done()
			})
			.then(function () {
				var rsh = new RegExp(eccent(my.strips(nosp(this.search.keyword))), "i")/*
Vue.set(this.search, "result", my.filter(this.search.allData, (f, e) => {
return (
	!!eccent(nosp(e.name))
	.match(rsh) ||
	!!eccent(nosp(e.description))
	.match(rsh) ||
	typeof e.infor == "object" && Object.values(e.infor).some(f => !!eccent(nosp(f)).match(rsh) )
)
})*/
var data = this.search.allData
var ls = "name description package size time".split(" ")

//clear data and set value empty
var _data = {}
var tmp
//setup all array in ls
my.each(ls, function (e) {
	_data[ ls[e] ] = []
})
//searchParams
my.each(data, function (e, f) {
	ls.some(function (type) {

		if (f[type] === undefined)
			return false
		if (type === "package")
			tmp = ( atob(e).match(rsh) || [""] ).join("").length
		else tmp = ( (f[type] + "").match(rsh) || [""] ).join("").length

		if (tmp !== 0)
		 	return _data[type].push({
				antutu: tmp,
				key: e
			}), true
	})
	//return false
})

var dataSearched = []

ls.forEach(function (key) {
	dataSearched = dataSearched.concat(_data[key].sort(function (a, b) { return b.antutu - a.antutu }))
})

var obj = {}

my.each(dataSearched, function (f, e) {
	obj[e.key] = data[e.key]
})

Vue.set(this.search, "result", obj)

			})
			.catch(function (e) {
				console.log(e + "")
			})
			.end(this)
			
		},
		isEmptyObject:function(obj){
			if (typeof obj !== "object")
				return false
			for (var tmp in obj)
				return false
			return true
		},
		back: function () {
			if (history.pushState)
				history.back()
			else my(window).trigger("popstate")
		},
		open: function () {
			window.open.apply(window, arguments)
		},
		atob: function (e) {
			return window.atob(e)
		},
		goto: function(package, data){
			if (history.pushState)
				stateHistory.push(my.$clone(this.$data)), history.pushState(this.$data, null, "information?package=" + package + (!!this.viewer ? "&viewer=" + this.viewer : ""));
				//history.replaceState({a: 100}, "Information", "?package=" + package);

			this.switchT("inforApp")
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
		limitKeyword: function (e) {
			return e.length > 15 ? e.slice(0, 14) + "..." : e
		},
		clearHistorySearch: function () {
			this.$set(this.search, "history", [])
		},
       getBtoa: function(base64) {
          var json = JSON.parse("{" + decodeURIComponent(atob(base64)) + "}")

          for ( var key in json )
             json[key] = btoa(encodeURIComponent(json[key]));

          return json
       }
	},
	mounted: function () {
		this.load("hot")
		
		database.ref("swipers/hot")
		.once("value", function(e) {
			app.hot.swipers = e.val()
		})

		database.ref("swipers/game")
		.once("value", function(e) {
			app.game.swipers = e.val()
		})
		
		database.ref("swipers/app")
		.once("value", function(e) {
			app.app.swipers = e.val()
		})
		
		// get history search in app
		var historySearch
		try {
			historySearch = JSON.parse(localStorage["history-search"])
		} catch (e) {
			historySearch = []
		}
		this.$set(this.search, "history", historySearch)

		this.$root.$el.removeAttribute("hidden")
	}
})

function updateObject ($obj) {
   var key
   for (key in $obj) {
	  app[key] = my.$clone($obj[key])
   }
}

my(window).on("popstate", function (e) {
   updateObject(stateHistory.pop())
})
})
