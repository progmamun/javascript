- `e.preventDefault` Blocking default click handling, when we click anchor link # , jumped top of the page but this code fixed it.
- `getElementsByTagName` | `getElementsByClassName` html collection we can deleted html tag from javascript.
- `querySelector` node list of elements `querySelectorAll`
- `prepend` add element like _before pseudo_ what's does. The Element.prepend() method inserts a set of Node objects or DOMString objects before the first child of the Element. DOMString objects are inserted as equivalent Text nodes. `append` like _after pseudo_ .`header.append(message.cloneNode(true));`

- Window.getComputedStyle() | The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.
- .setProperty() | The CSSStyleDeclaration.setProperty() method interface sets a new value for a property on a CSS style declaration object.

---

- .getAttribute() | The getAttribute() method of the Element interface returns the value of a specified attribute on the element.

- Data Attribute |`console.log(logo.dataset.versionNumber); //use camelCase instead of data-version-number`

## ClassList | The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

```
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
```

- `<h1 onclick="alert('html alert')">` | event function in html old style.
- Bubbling Phase (up)| and Capturing Phase(down)| event | `event.stopPropagation(); bubbling`

## Event Delegation |

1. Add event listener to common parent element
2. Determine what element originated the event

`e.preventDefault();`

## DOM Traversing

- Going downwards: child | **querySelector** no matter how deep in the Dom tree
  ```
  h1.querySelectorAll('.highlight');
  h1.childNodes;
  h1.children;
  h1.firstElementChild.style.color = 'white';
  h1.lastElementChild.style.color = 'orangered';
  ```
- Going Upwards: Parents| **closest** find parents no matter how far up in the DOM tree.

```
h1.parentNode;
h1.parentElement;

**h1.closest('.header').style.background = 'var(--gradient-secondary)';**
```

**closest** _most important_

- Going Sideways: siblings | **nextElementSibling**

```
h1.previousElementSibling;
h1.nextElementSibling;

h1.previousSibling;
h1.nextSibling;

h1.parentElement.children;
[...h1.parentElement.children].forEach(function (el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
});
```

## Tab- tabbed Component

## Guard Clause `if (!clicked) return;`

# The Intersection Observer API

const obsOptions = {
root: null,
threshold: 0,
// rootMargin: '-90px',
rootMargin: `-${navHeight}px`,
};

# Revealing Elements on Scroll

# Defer and Async Script loading

`<script async src="script.js">`
`<script defer src="script.js">`

- End of Body

1. Regular `<script src="script.js">`

- Scripts are fetched and executed **after the html is completely parsed** .

2. Async in Head

- Scripts are fetched **asynchronously** and executed **immediately**
- Usually the DOMContentLoaded event waits for all scrips to execute, except for async scripts. So, DOMContentLoaded does not wait for an async script
- Script not guaranteed to execute in order
- use for 3rd-party scripts where order doesn't matter(e.g. Google Analytics)

3. Defer in Head

- Scripts are fetched **asynchronously** and executed **after the html is completely parsed**
- DOMContentLoaded event fires after defer script is executed
- scripts are executed in order
- _This is overall the best solution! use for your own scripts, and when order matters(e.g. including a library)_
