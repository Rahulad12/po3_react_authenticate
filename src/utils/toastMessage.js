const addToastStyles = () => {
    if (document.getElementById("toast-style")) return; // Prevent duplicate styles

    const style = document.createElement("style");
    style.id = "toast-style";
    style.innerHTML = `
        #toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .toast {
            padding: 12px 20px;
            border-radius: 5px;
            color: white;
            font-size: 14px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            opacity: 1;
            transition: opacity 0.5s ease-out;
        }
        .toast.success { 
            background-color: #28a745;
            border-left:6px solid orange;
        }
        .toast.error { 
            background-color: #dc3545;
            border-left:6px solid yellow;
        }
    `;
    document.head.appendChild(style);
};

export const showToast = (message, type = "success") => {
    addToastStyles(); // Ensure styles are loaded

    let toastContainer = document.getElementById("toast-container");
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.id = "toast-container";
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;

    const close = document.createElement("button");
    close.type = "button"
    close.innerText = "x";
    close.style.marginLeft = ".5rem";
    close.style.backgroundColor = "transparent";
    close.style.border = "none";
    close.style.color = "white";
    close.style.fontWeight = "bold";
    close.style.fontSize = "1rem";
    close.style.cursor = "pointer";
    close.style.float = "right";
    close.style.animation = "fadein 0.5s";
    close.addEventListener("click", () => {
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.remove();
        }, 500);
    });
    toast.appendChild(close);
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
};
