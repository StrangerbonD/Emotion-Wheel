import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('Uncaught UI error:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.hash = '';
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#fdfcef] dark:bg-[#171717] text-[#222] dark:text-[#eee]">
          <h1 className="text-[22px] font-bold mb-2">Something went wrong</h1>
          <p className="text-[14px] text-[#666] dark:text-[#aaa] mb-5 max-w-[380px]">
            An unexpected display error occurred. Reloading will restore the Emotion Wheel.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="btn px-5 py-2.5"
          >
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
