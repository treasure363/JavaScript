## Do's & Dont's
Make sure to follow the steps exactly as it is.  
If you are facing any problem then restart the process from the beginning.  
If clicking on the new button created takes you back by one page then you must have not followed the instructions properly.   
While editing the web page make sure to edit and click outside to save the edited HTML Code and not press enter to save it.  
Edit the whole HTML Code rather than updating only a part of code/HTML attribute.  

I am using Microsoft Edge browser.


## Step 1
- Open a new tab [Ctrl + T]
- Open Browser Inspector [Ctrl + Shift + I]   
<img title="a title" alt="Alt text" src="./media/1 Inspector.png">    
- In the URL bar go to `https://gietuerp.in/`  

** Make sure that your device is in desktop mode only.  
<img title="a title" alt="Alt text" src="./media\2 Device View.png">    
If it's highlighted as Blue then the browser view is changed to Phone/Tablet.  
We'll be using Desktop View so make sure it's not highlighted.

## Step 2
- Login with your credentials
- Go to `Attendance Details` and then `View Subject Wise Attendance`  
<img title="a title" alt="Alt text" src="./media\3 View Attendance.png">  

#### Goal
It's a two Step Process:  
Step 1: Create an element in the DOM. We'll be adding a button to make the process interactive.  
Step 2: Add JS code in the console which will be doing all the calculations.  
  
`Step 1 is optional` we can use the console only to find the required details, but it is mandatory to analyse the HTML file first and to give it a `GUI` we are adding a button otherwise JS Console will only do the work.  

## Step 3
- Click on `Select an Element` in the top left corner of the Inspector.    
<img title="a title" alt="Alt text" src="./media\4 Select Element.png">    
If it's highlighted blue, then it means that you are ready to select an element from the web page
- Hover over the `Go back!` Button on the web page and when it's highlighted click on it.  
<img title="a title" alt="Alt text" src="./media\5 Selected Button.png">     
It'll open up the part of HTML code on the Element tab in Inspector
- Right Click on the <div> tag and Click `Edit as HTML`  
<img title="a title" alt="Alt text" src="./media\6 Edit as HTML.png">     

It'll open up the Editor
- Select all [Ctrl + A] and delete. Now we'll write our own code here.  
<img title="a title" alt="Alt text" src="./media\7 Empty.png">   

- Copy and Paste this HTML Code:

```HTML
<div class="card-footer">
    <input type="button" value="Attendance!" class="btn btn-info float-left" onclick="calculate()">
    <input type="button" value="Go back!" class="btn btn-info float-right" onclick="history.back()">
</div>
```
  
After this click anywhere on the inspector outside the editing area.  
For Eg: Click on the `<!-- /.card-body -->` which is a comment highlighted as green<br>    
<img title="a title" alt="Alt text" src="./media\8 HTML Updated.png">     

## Step 4
- Add the following JS code in the Console
```JavaScript
// This is just a helper function
const calc = (n, m) => {
    if(m/n >= 0.8)  return Math.floor(m/0.8) - n;
    return 4*n - 5*m
};

// This is our main function which will be called after clicking on the button
function calculate() {
    console.log('Calculating Attendance...');
    const n = parseInt(document.querySelector('tfoot tr th:nth-of-type(2n)').innerText);
    const m = parseInt(document.querySelector('tfoot tr th:nth-of-type(3n)').innerText);
    let msg;
    if(m/n >= 0.8)
        msg = `Don't skip more than ${calc(m,n)} classes.`;
    else
        msg = `Bruh!! Make sure you attend ${calc(m,n)} classes.`;
    // Below code will only work if you create a text field with an id update
    // document.querySelector('#update').innerText = msg + '\nCheck again tomorrow for update!'; 

    alert(msg)
}
```  
<img title="a title" alt="Alt text" src="./media\9 JS code.png">     

## Done!
If you have done the above steps correctly then everything will work as it should be.  
Click on the `Attendance!` button to test it out :]

