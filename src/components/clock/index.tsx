import React from 'react';
import './clock.scss';

interface Props {}
interface State {
  date: Date;
}

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timeout | undefined;

  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(): void {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId as NodeJS.Timeout);
  }

  tick(): void {
    this.setState({ date: new Date() });
  }

  get time(): string {
    return this.state.date.toLocaleTimeString([], {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  render() {
    return <div className="clock">{this.time}</div>;
  }
}
