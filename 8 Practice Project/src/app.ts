class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById('project-input')!
    );
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement; // form element
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement; // Typescript has no chance of understanding that the query selector is going to return an input element here. So to tell typescript, I will again use casting, and cast this to an input element,

    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;

    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  /*The problem here is that, this here, that this keyword in submitHandler does not point at the class actually. Why? Well because of the way JavaScript and typescript works, we bind the method here to the event listener and when we bind something to an event or with the help of an event listener then that method, which is going to get executed, will have this bound to something else, in this case to the current target of the event. So this in this method will not point at the class, when the method is triggered upon an event with an event listener. Now the work around or the solution is to actually call bind here on submitHandler to preconfigure how this function is going execute when it executes in the future, and the first argument we can pass to bind then is actually what the this keyword will refer to inside of the to be executed function. */

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
