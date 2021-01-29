# Shopping List

This exercise from [Zero to Mastery](https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/) gave me more practice with writing event-driven code. Working through this assignment taught me some important nuances of working with the DOM, including:
 - **DOM Methods - querySelectorAll() vs getElementsByTagName():** A bug that initially prevented user-added list items from being marked "done" when clicked taught me this important difference between querySelectorAll(), which returns a static NodeList, and getElements..(), which returns a live HTMLCollection. By using the getElementsByTagName() method to cache the shopping list items, user-added items were added to the HTMLCollection and able to be manipulated.   
 - **HTMLCollections != Arrays:** HTMLCollections and NodeLists are **not** arrays, so array methods like forEach() ain't gonna fly. To add an event listener to each list item, I had to use a for loop.
