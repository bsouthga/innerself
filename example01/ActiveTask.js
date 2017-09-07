import html from "../index";

export default function ActiveTask(text, index) {
    return html`
        <li>
            ${text}
            <button
                onclick="dispatch('COMPLETE_TASK', ${index})">
                Mark As Done</button>
        </li>
    `;
}
