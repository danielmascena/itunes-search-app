import React, {Component, ErrorInfo, ReactNode} from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

/**
 * Prevent any potential runtime error to crash the app. 
 * The component is intended to act as a barrier, 
 * catching errors and avoiding them to bubble up into the component tree.
 */
class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // TODO: log the error to an error reporting service
        console.error(error, errorInfo.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // TODO: Custom fallback UI
            return <h1>Something weng wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;