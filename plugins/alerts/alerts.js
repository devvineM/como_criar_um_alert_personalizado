class Alerts {
    static layout(message) {
        return `
            <div id="alerts" class="box">
                <div class="window box">
                    <div class="w-100 box fill">
                        <span class="fs-5">${message}</span>
                    </div>

                    <div class="w-100 box align-end">
                        <button class="btn btn-primary" onclick="Alerts.remove();">Ok</button>
                    </div>
                </div>
            </div>
        `;
    }

    static set(message) {
        if(!message) {
            return;
        }

        const isAlerts = document.querySelector("#alerts");

        if(isAlerts) {
            return;
        }

        document.body.insertAdjacentHTML("beforeend",this.layout(message));
        
        setTimeout(()=> {
            const window = document.querySelector("#alerts .window");

            window.style.transform = "translateY(0)";
        },300);
    }

    static remove() {
        const isAlerts = document.querySelector("#alerts");

        const window = document.querySelector("#alerts .window");

        window.style.transform = "translateY(100vh)";

        setTimeout(()=> {
            isAlerts.parentNode.removeChild(isAlerts);
        },1000);
    }
}