# CSS Selectors

CSS selectors are patterns used to select the elements you want to style.

## Basic Selectors

- **Universal Selector**  
    `*` selects all elements.
    ```css
    * {
        margin: 0;
        padding: 0;
    }
    ```

- **Type Selector**  
    Selects all elements of a given type.
    ```css
    p {
        color: blue;
    }
    ```

- **Class Selector**  
    Selects all elements with a specific class.
    ```css
    .my-class {
        font-size: 18px;
    }
    ```

- **ID Selector**  
    Selects an element with a specific ID.
    ```css
    #my-id {
        background: yellow;
    }
    ```

## Grouping Selectors

Select multiple elements at once.
```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```

## Combinators

- **Descendant Selector**
    ```css
    div p {
        color: green;
    }
    ```

- **Child Selector**
    ```css
    ul > li {
        list-style-type: square;
    }
    ```

- **Adjacent Sibling Selector**
    ```css
    h2 + p {
        margin-top: 0;
    }
    ```

- **General Sibling Selector**
    ```css
    h2 ~ p {
        color: gray;
    }
    ```

## Attribute Selectors

Select elements based on attributes.
```css
input[type="text"] {
    border: 1px solid #ccc;
}
```

## Pseudo-classes

Select elements based on their state.
```css
a:hover {
    color: red;
}
li:first-child {
    font-weight: bold;
}
```

## Pseudo-elements

Style parts of elements.
```css
p::first-line {
    text-transform: uppercase;
}
```

---

**References:**
- [MDN CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)