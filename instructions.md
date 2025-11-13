Step 1
In this workshop, you will practice styling checkboxes by building a game settings panel.

All of the HTML boilerplate (DOCTYPE, html, head and body) has been provided for you.

Within the body, create a div element with an h1 element nested inside. Give the h1 element the text Game Settings

Step 2
Immediately after your h1 element, create four label elements.

Inside of each of the label elements, create an input element with the type attribute set to "checkbox".

After each input element, give your label elements the following texts, in order: Sound Effects, Background Music, Hard Mode, and Haptic Feedback.

Step 3
Now you will begin sprucing the page up with some CSS styling. Begin by creating the body selector.

Set the body to have a height property with a value of 100vh and a background-color property with a value of #f0f0f0.

The height of 100vh makes the body take up the full height of the browser viewport, while the light gray background color provides a subtle base for the page.

Lastly, set a text-align property with the value of center. This will center all inline-content contained within the page unless a child element overrides it with its own alignment.

Step 4
Now that the body has been styled, you are going to create a container card for the Game Settings panel. To start, create a class selector for settings-card.

This will be where all of your formatting for the container will go. Set the max-width to 250px to define the overall size of your container.

Next, set your padding to 20px so that your content has space between it and the border of the container.

After this, create a rounded edge by setting your border-radius to 10px.

Then set a box-shadow with the values of 0 2px 6px rgba(0,0,0,0.2). This will create a subtle "lifted" look that will create depth for the container.

Step 5
Within your .settings-card set the margin property to auto.

Setting the margin property to auto automatically adjusts the margins of an element to evenly distribute the remaining space in its container, commonly used to center block-level elements horizontally.

And last, set a text-align property with the value of left. This will align the inline content, such as text, to the left side of its containing element.

Step 6
Now it is time to add your newly created class settings-card class to your div element.

Step 7
Now create an h1 selector and set the text-align property with a value of center. This will center your h1 elements.

Step 8
You need some spacing between the checkboxes and the labels. Begin by using the selector for label in your CSS and set a display property of block.

Next, set a margin property of 8px auto to add vertical spacing between elements. This will create consistent spacing above and below each element, helping to separate content and improve readability.

Finally, set the cursor property to pointer on the label elements. This will change the cursor to a hand icon when a user hovers over a label, signaling that the element is clickable and improving the overall user experience.

Step 9
Next up, you are going to enlarge the checkboxes for better visibility.

Begin by setting up a selector for input, but specifically targetting your [type="checkbox"].

Within your selector, set the width and the height to 20px. This makes it larger than it was before.

And to conform with your cursor setting that was set on the labels, add cursor and assign the value of pointer to it. After that, when you hover over the labels it will display a pointer.

Step 10
Now you are going to remove the default checkbox that is applied by browsers. Inside of your input[type='checkbox'] selector, add appearance with a value of none.

Setting the appearance property to none will clear the appearance the browser applies to checkboxes, allowing you to show the style you want.

After doing so, since the checkbox won't be visible anymore, set a border with 2px solid and a hex code of #f1be32.

Step 11
Now that you can see your checkbox again, you are going to finalize some styling options for it. Give them a rounded edge by adding a border-radius of 4px to your input[type="checkbox"] selector.

Then give it a background-color of white to make the center of your checkbox stand out from the background of the container.

Since you are going to be setting up a custom transition for when a user clicks on the checkboxes, set a transition with the value of all and 0.3s so that the transition happens smoothly over 0.3 seconds rather than instantly.

Step 12
Next, set a vertical-align property with a value of middle.

The vertical-align property controls how inline or inline-block elements align vertically with the surrounding text or other inline elements. It's often used to adjust the vertical position of elements like images, icons, or text within a line.

Then finalize your checkbox with a margin property of 15px.

Step 13
In a previous lesson, you learned about pseudo-classes and pseudo-elements in CSS. You are going to apply that knowledge now by creating a combined type selector with pseudo-class selector.

First, start with the format for the type selector by setting it as input[type="checkbox"] and appending :checked to the end of it.

Next, give it a background-color with the value of #f1be32.

And lastly, set the border-color to have a value of #e2a60d.

Step 14
Now that your checkboxes change color when the user clicks them, you are going to apply some styling to make it a little more obvious that the checkbox has been selected.

First, create a new type selector of input[type="checkbox"] with the previous pseudo-class selector of :checked and add the pseudo-element selector of ::after. This will specifically target what happens after the user has checked the box.

Next, add content with the value of "✓".

Step 15
In the declaration for the input[type="checkbox"]:checked::after selector, set the display to block. Setting your display property as block makes the element a block-level element, meaning that it takes up the full width of its container and starts on a new line, allowing you to control its width, height, and spacing more easily.

Next, set text-align to center. This will center the inline content (like text, or inline elements) horizontally within the block. The block will still take up the full width of its container but everything inside it will be aligned to the center.

Step 16
To finish setting up the visual effect of your checkbox, set the font-weight property with a value of bold. This will increase the visibility of the checkmark.

Now that this is easier to see, change the color to a value of white. This is going to change the color of the checkmark within the checkbox when it is checked.

Lastly, alter the line-height to a value of 20px.

With that, you have completed the game settings panel!

