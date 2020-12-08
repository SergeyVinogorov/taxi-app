import React from "react";

export class BaseComponent<P, S> extends React.Component<P, S> {

    public view?: (ctrl: this, props: P) => JSX.Element;

    constructor(props: P, context: S) {
        super(props, context);
    }

    public componentDidMount(): void {
        this.activate && this.activate();
    }

    public shouldComponentUpdate(
        nextProps: Readonly<P>,
        nextState: Readonly<S>,
        nextContext: any
    ): boolean {
        return this.update(nextProps, nextState, nextContext);
    }

    public componentWillUnmount(): void {
        this.dispose();
    }

    public activate(): void {
        // метод для переопределения
    }

    public update(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        // метод для переопределения
        return false;
    }

    public dispose(): void {
        // метод для переопределения
    }

    public render(): React.ReactElement<object> {
        if (this.view) {
            return this.view(this, this.props);
        } else {
            return React.createElement("div", {}, "Представление не определено");
        }
    }

}