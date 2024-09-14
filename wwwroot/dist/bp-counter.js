const template = document.createElement("template");
template.innerHTML = `
    <div part="root">
        <div part="title">Count:</div>
        <span part="count" id="count"></span>
        <div part="actions">
            <button part="btn" id="dec">-</button>
            <button part="btn" id="inc">+</button>
        </div>
    </div>
`;

class Counter extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("inc").onclick = () => this.inc();
        this.shadowRoot.getElementById("dec").onclick = () => this.dec();
        this.update(this.count);
    }

    inc() {
        this.update(++this.count);
    }

    dec() {
        this.update(--this.count);
    }

    update(count) {
        this.shadowRoot.getElementById("count").textContent = count;
    }
}

customElements.define("bp-counter", Counter);
