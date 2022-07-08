import { AbstractAnalyzer } from "./AbstractAnalyzer";

export class TrueAnalyzer extends AbstractAnalyzer {
    protected analyze(node: HTMLElement): boolean {

        return true;
    }

    protected getRole(): string {
        return "";
    }
} 