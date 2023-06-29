// 观察者
interface INotify {
  // 通知
  noify: (...args: any[]) => void;
}

// 被观察者
class Target {
  observers: INotify[] = [];

  observe<T extends INotify>(observe: T) {
    this.observers.push(observe);
  }

  onChage(...args: any[]) {
    this.observers.forEach(it => it.noify(...args));
  }
}

class Foo implements INotify {
  noify(...arts: any[]) {
    console.log('Foo receive noify');
  }
}

class Bar implements INotify {
  noify(...arts: any[]) {
    console.log('Bar receive noify');
  }
}
