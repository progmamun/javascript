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
