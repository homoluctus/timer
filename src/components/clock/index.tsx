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

  private pad(target: number): string {
    return `${target < 10 ? '0' : ''}${target}`;
  }

  get time(): string {
    return [
      this.state.date.getHours(),
      this.state.date.getMinutes(),
      this.state.date.getSeconds()
    ]
      .map((v) => this.pad(v))
      .join(':');
  }

  render() {
    return <div className="clock">{this.time}</div>;
  }
}
