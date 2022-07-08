import { AbstractAnalyzer } from "./AbstractAnalyzer";

export class HiddenAnalyzer extends AbstractAnalyzer {
    protected analyze(node: HTMLElement, config: SpeakConfigInterface): boolean {
        return !config.isRef && (this.isHidden(node) || this.nodeTreeIsAriaHidden(node));
    }

    protected getRole(): string {
        return "presentation";
    }

    protected nodeTreeIsAriaHidden(node: HTMLElement): boolean {

        return node && (node.getAttribute("aria-hidden") === "true" || this.nodeTreeIsAriaHidden(node.parentElement));
    }

    protected isHidden(node: HTMLElement): boolean {

        return !node.offsetParent && node.offsetWidth === 0 && node.offsetHeight === 0;
    }
}