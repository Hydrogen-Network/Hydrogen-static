var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

document.body.insertAdjacentHTML("beforeend", `<div class="curzr" hidden></div>`)

class GlitchEffect {
	constructor() {
		this.root = document.body
		this.cursor = document.querySelector(".curzr")

		this.distanceX = 0,
		this.distanceY = 0,
		this.pointerX = 0,
		this.pointerY = 0,
		this.previousPointerX = 0
		this.previousPointerY = 0
		this.cursorSize = 25
		this.glitchColorB = "#00feff"
		this.glitchColorR = "#ff4f71"

		this.cursorStyle = {
			boxSizing: "border-box",
			position: "fixed",
			top: `${this.cursorSize / -2}px`,
			left: `${this.cursorSize / -2}px`,
			zIndex: "2147483647",
			width: `${this.cursorSize}px`,
			height: `${this.cursorSize}px`,
			backgroundColor: "#222",
			borderRadius: "50%",
			boxShadow: `0 0 0 ${this.glitchColorB}, 0 0 0 ${this.glitchColorR}`,
			transition: "100ms, transform 100ms",
			userSelect: "none",
			pointerEvents: "none"
		}

		if (CSS.supports("backdrop-filter", "invert(1)")) {
			this.cursorStyle.backdropFilter = "invert(1)"
			this.cursorStyle.backgroundColor = "#fff0"
		} else {
			this.cursorStyle.backgroundColor = "#222"
		}

		this.init(this.cursor, this.cursorStyle)
	}

	init(el, style) {
		Object.assign(el.style, style)
		this.cursor.removeAttribute("hidden")

		document.body.style.cursor = "none"
		document.body.querySelectorAll("button, label, input, textarea, select, a").forEach((el) => {
			el.style.cursor = "inherit"
		})
	}

	move(event) {
		this.previousPointerX = this.pointerX
		this.previousPointerY = this.pointerY
		this.pointerX = event.pageX + this.root.getBoundingClientRect().x
		this.pointerY = event.pageY + this.root.getBoundingClientRect().y
		this.distanceX = Math.min(Math.max(this.previousPointerX - this.pointerX, -10), 10)
		this.distanceY = Math.min(Math.max(this.previousPointerY - this.pointerY, -10), 10)

		if (event.target.localName === "button" ||
			event.target.localName === "a" ||
			event.target.onclick !== null ||
			event.target.className.includes("curzr-hover")) {
			this.hover()
		} else {
			this.hoverout()
		}

		if (
			this.pointerX < 0 ||
			this.pointerY < 0 ||
			this.pointerX >= window.innerWidth ||
			this.pointerY >= window.innerHeight
		) {
			this.cursor.style.display = "none";
		} else {
			this.cursor.style.display = "flex";
		}

		this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
		this.cursor.style.boxShadow = `
      ${+this.distanceX}px ${+this.distanceY}px 0 ${this.glitchColorB}, 
      ${-this.distanceX}px ${-this.distanceY}px 0 ${this.glitchColorR}`
		this.stop()
	}

	hover() {
	}

	hoverout() {
	}

	click() {
		this.cursor.style.transform += `scale(0.75)`
		setTimeout(() => {
			this.cursor.style.transform = this.cursor.style.transform.replace(` scale(0.75)`, "")
		}, 35)
	}

	stop() {
		if (!this.moving) {
			this.moving = true
			setTimeout(() => {
				this.cursor.style.boxShadow = ""
				this.moving = false
			}, 50)
		}
	}

	remove() {
		this.cursor.remove()
	}
}

(function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return;
	const cursor = new GlitchEffect()
	document.onmousemove = function (event) {
		cursor.move(event);
	}
	document.onclick = function () {
		cursor.click();
	}
	document.addEventListener("mouseleave", function (event) {
		if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
			cursor.cursor.style.display = "none";
		} else {
			cursor.cursor.style.display = "flex";
		}
	});
	document.addEventListener("mouseover", (event) => {
		const targetElement = event.target;
		const isCursorOverDisappearElement = targetElement.tagName.toLowerCase() === "iframe";

		if (isCursorOverDisappearElement) {
			cursor.cursor.style.display = "none";
		}
	});
})()

}
/*
     FILE ARCHIVED ON 19:19:08 Aug 14, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:42:51 Nov 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 203.96
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.058
  cdx.remote: 0.053
  esindex: 0.009
  LoadShardBlock: 181.807 (3)
  PetaboxLoader3.datanode: 420.182 (4)
  load_resource: 338.211
*/
