class Calendar extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const days = document.querySelectorAll("my-day");
		days.forEach(child => child.parentNode.removeChild(child));

		/* title */
		const title = document.createElement("div");
		const e = document.createTextNode(this.getAttribute("title"));
		const h1 = document.createElement("h1");
		h1.appendChild(e);
		title.appendChild(h1);

		title.appendChild(document.createElement("hr"));
		title.className = "my-calendar-title"
		this.appendChild(title);

		/* days */
		const daysDiv = document.createElement("div");
		daysDiv.className = "my-calendar-days"
		days.forEach(child => daysDiv.appendChild(child));

		this.appendChild(daysDiv);
	}
}

class Day extends HTMLElement {
	constructor() {
		super()
	}
	
	connectedCallback() {
		const events = this.querySelectorAll("a");
		events.forEach(e => this.removeChild(e));

		/* title */
		const h2 = document.createElement("h2");
		h2.appendChild(document.createTextNode(this.getAttribute("title")));
		this.appendChild(h2);

		/* list of events */
		const ul = document.createElement("ul");
		events.forEach(e => {
			const li = document.createElement("li");
			li.appendChild(e);
			ul.appendChild(li);
		});
		this.appendChild(ul);

		if (events.length === 0) {
			const none = document.createTextNode("No events for today");
			this.appendChild(none);
		}
	}
}

customElements.define("my-calendar", Calendar);
customElements.define("my-day", Day);
