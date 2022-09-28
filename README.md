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
- Make the generate button click to generate a password
- Prompt open a box for password criteria
- Prompt open a box for the length of the password
- Choose a length of at least 8 characters and no more than 128 characters
- Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters answer each prompt
- Input should be validated and at least one character type should be selected; all prompts are answered 
- The password is generated and written to the page

## Summary 
This project was to create a deployed Random Password Generator. Beginning this task was very difficult I had to spend some time reading different articles such as W3 and MDN. After reviewing the material I was going to need I utilizing Javascript to excute what was needed. In order to complete this task I had to use an asortment of functions, arrays, and loops. I used console.log() to make sure my code stayed true. During my research I discovered how to implement Math.() to great a random response. To give the option of a specific desired password that had a certain criteria, I added in prompt() and cofirm() boxes, I did this by assigning variable to an array and calling on those arrays in my function; I also used .concat() to smash all the ararrys together. I feel at the end of this I have achieved a better understadning of Javascript and functions. Below is my code for the Propmt function.

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
