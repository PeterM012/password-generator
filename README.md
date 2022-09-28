# password-generator

## Deployed Link
https://peterm012.github.io/password-generator/

## Site Picture 
![image](https://user-images.githubusercontent.com/110750833/192899393-17f0b1cc-6754-403f-8b3d-1b4bd1218ac8.png)

## Technologies Used
- HTML - Used to create elements on the DOM
- CSS - Styles html elemnts on page
- JS - Used to create interactions and animations on webpage 
- Git - version control system to track changes to source code
- GitHub - hosts reposiory that can be deployed to Github Pages

## To Do
- Add links that scroll to corresponding selection
- Have at Least 5 Links
- About ME, Work, Contact Me
- First Application must be the biggest image
- Images of Applications and Tags in boxes
- When image is clicked on must send user to deployment page
- Resize Page to correspond with respective screens or device
- Have a responsive Layout that adapts to viewport

## Summary 
This project was to create a deployed portfolio showcasing samples of my work to prove that I am a worthy candidate for an open position. I achieved this by utilizing advance CSS techniques. I did this by creating a webpage that adjust to the viewpoint needed without distorting the images or text. I implemented a navagational bar with a hover action to really make the words pop. I also created the footer to display the logos/icons which can access the correlating destination. My biggest success for this project was getting the Tags to be displayed on the images at any viewpoint. Below is the code I used to achieve this. It took 3 days to solve my problem but i would say it displays great!

## Code Snippet
JS
```js
//New Function for Prompt messages displayed when Generate button is "Clicked"
function prompts() {
    characters = parseInt(prompt("Password length 8-128 characters"))


    // If statement showing that only number can be used and must be between 8-128 nothing less or more
    if (isNaN(characters) || characters < 8 || characters > 128) {
        alert("Password does not meet criteria, Please try again.")
        return false;
    }
    //I used Con.cat to consolidate my 4 arrays for my For Loop in order to avoid 
    //If selected yes the Password will include Uppercase Letters
    if (confirm("Would you like to include uppercase letters in password?")) {
        option = option.concat(upperCase);

```
