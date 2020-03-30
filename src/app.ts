class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found!');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Nikhil']);

it.addEmployee('Nikhil');
it.addEmployee('Akhil');

// it.employees[2] = 'Punam';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInfo();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'FY Report';
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.printEmployeeInfo();

// const itCopy = { name: 's', describe: it.describe };
// itCopy.describe();
