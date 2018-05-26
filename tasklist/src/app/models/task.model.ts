export class Task {
    action: string;
    selected: boolean;
    description: string;

    constructor(action: string, description:string);
    constructor(action: string, description: string, selected?: boolean) {
        this.action = action;
        this.selected = selected;
        this.description = description;
    }
}
