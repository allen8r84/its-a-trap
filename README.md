# its-a-trap
jQuery Demo for DevMountain class
//notes-- I did not check the spelling on this and I never won any spelling bees - so go easy on me...




//********JQUERY**************
//DOM manipulation - Document Object Model

//can select and target classes and IDs similarly to CSS (syntax is a bit different, but you can select the same elements, you don't have to make new ones.)
// always use this as a reference: http://api.jquery.com/

//how to call jquery in a site/file
//fork/clone to use as example: https://github.com/heyamykate/its-a-trap

//set up a simple server to preview jquery (only works with a mac- unless you have python installed...)
//go to terminal and in the directoty that your content is located. then enter in: python -m SimpleHTTPServer (found at: http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python)


//download jquery file from the api.jquery.com
//add it ito the same folder as your javascript (usually named js)
//to add it to your project, add it in the html at the bottom just before "\<\/body>" by doing the following:
//

   /* <script src="js/jquery-1.11.2.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/app.js" type="text/javascript" charset="utf-8"></script>
*/

//that adds both jquery and javascript - add jquery first as browsers read top to bottom and you want jquery loaded before javascript.

// to get started 3 pronged approach: plan, prepare, perform --- notes at the top of js file explaining...

//now use the following to wrap all your javascript (meaning everyhting in your javascript file will goes inbetween the following:
/*
$(document).ready(function() {
    //everything you write goes in here...   
});
*/
