export class Task {
    constructor(action: string, description:string);
    constructor(
        public action: string,
        public description: string,
        public selected?: boolean
    ) {
        this.action = action;
        this.selected = selected;
        this.description = description;
    }
}
