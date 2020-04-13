namespace App {
  // autobind decorator
  export function autobind(
    _target: any,
    _methodName: string,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: TypedPropertyDescriptor<any> = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
