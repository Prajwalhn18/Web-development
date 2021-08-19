# Responsive-design 

### CSS Units

- Absolutes lengths: cm,mm,px,pt,in,pc
- Relative lengths: em,ex,rem,vh,vmin,vmax

    *The em and rem are considered relative, because they are relative to the font size of other elements*  

    - Use rems for better use of sizes, especially while playing with the text. 

*How to decide which unit to choose?*

- Font-size = rem
- padding and margin = em
- widths = em or percentage 

## Responsive layout basics

- Elements normally have a display:block or a display:inline as a default from the browser.

### Flex-box basics

-  The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.

- The flex-box models are supported in all modern browsers.

- Before using the flex-box model, make sure that you define the flex container.

- **Flex-direction** property defines in which direction the container wants to stack the flex items.  

- Flex-direction: row; Here, Row is the default action.

- The **justify-content** property is used to align the flex items.

- The **flex-grow** property specifies how much a flex item will grow relative to the rest of the flex items.


### Media-queries

- Media-queries are really helpful for small screens. You can modify your content according to the sizes of the screens.

- use @media rule to include a block of css properties, which gets executed once the condition is true. 

- Go for mobile-first design.

- Instead of changing styles when the width gets smaller than 768px, we should change the design when the width gets larger than 768px. This will make our design Mobile First.

- We can include as many breakpoints as we like, for differentiating between different devices.

- Some itmes which is not required on small/large devices can be hidden.







