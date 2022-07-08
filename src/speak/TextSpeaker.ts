import { AbstractSpeaker } from "./SpeakerInterface";
import { LabelledSpeaker } from "./LabelledSpeaker";

export class TextSpeaker extends AbstractSpeaker {
    constructor(private labelledSpeaker: LabelledSpeaker) { super() }

    public getText(node: HTMLElement, config: SpeakConfigInterface): string {
        let text = this.labelledSpeaker.getText(node, config)
            || (node.title
                || node.innerText
                || node.textContent
                || node.getAttribute("value")
                || "").trim().replace(/\n+/g, ". ");
        return text ? `${text}.` : ``;
    }
}