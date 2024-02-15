// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Him');
textStorage.addItem('Manu');
textStorage.addItem('Max');

console.log(textStorage.getItems());

textStorage.removeItem('Max');

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();

// objStorage.addItem({ name: 'Him' });
// objStorage.addItem({ name: 'Vim' });
// objStorage.addItem({ name: 'Tim' });

// objStorage.removeItem({ name: 'Tim' });

// console.log(objStorage.getItems());

// objStorage.removeItem({ name: 'Vim' });

// console.log(objStorage.getItems());

// Generic Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  //  partial kind of wraps our own type, and changes it to a type where all these properties are optional.

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna']; // Now this array cannot be changed
