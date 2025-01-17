class NamedDefaultValue<T = string> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let defaultvalue = new NamedDefaultValue('myNumber');
  defaultvalue.setValue('myValue');
  console.log(value.toString()); // myNumber: myValue