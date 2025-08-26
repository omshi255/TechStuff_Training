#  CSS Box Model & Units (`px`, `em`, `rem`)

## 🔹 CSS Box Model
In CSS, **every element is a rectangular box**.  
This box has 4 layers:

1. **Content** → Actual text, image, or data inside the element.  
2. **Padding** → Space between the content and the border.  
3. **Border** → Line surrounding the padding + content.  
4. **Margin** → Space outside the element (distance from neighbors).





### Example
```css
div {
  width: 200px;          /* Content width */
  padding: 20px;         /* Space inside border */
  border: 5px solid red; /* Border thickness */
  margin: 10px;          /* Space outside element */
}

 Total width of box = content + padding + border + margin
= 200 + (20+20) + (5+5) + (10+10) = 270px
🔹 Box-Sizing

By default, width does not include padding & border.
To include them inside the width, use:

* {
  box-sizing: border-box;
}

Now width: 200px = whole box (content + padding + border).
🔹 CSS Units: px, em, rem
1. px (pixels)

    Absolute, fixed size.

    Independent of parent or root.

p { font-size: 16px; } /* Always 16px */

2. em (relative to parent font-size)

    1em = parent font-size.

div { font-size: 20px; }
p { font-size: 1.5em; } /* 30px */

3. rem (relative to root <html> font-size)

    1rem = root font-size.

    Default root is usually 16px.

html { font-size: 10px; }
p { font-size: 2rem; } /* 20px */

🔹 Comparison Table
Unit	Based On	Example (if parent=20px, root=16px)
px	Fixed value	20px = always 20px
em	Parent font-size	1em = 20px
rem	Root font-size	1rem = 16px

 In short:

    Content = actual data

    Padding = inner spacing

    Border = protective wall

    Margin = outer spacing

    px = fixed

    em = relative to parent

    rem = relative to root


In CSS, every element on a webpage is treated like a rectangular box.
This box is made up of 4 layers:

Content → The actual text, image, or other data inside the element.

Padding → The space between the content and the border.

Border → The line that wraps around the padding and content.

Margin → The outer space between this element and other elements.