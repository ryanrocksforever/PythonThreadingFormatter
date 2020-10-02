# PythonThreadingFormatter
<a href="https://ryanrocksforever.github.io/PythonThreadingFormatter/">Click For Page</a>

This is a tool written in html, js, and css, to format python code, into code that is "threaded", with the threading package.

If you go to the site you will see
<br>
<img src="page screenshot.PNG" alt="Italian Trulli">

an example of non threaded python code would be
<br>
<code>
def foo(bar):</code>
<br>
<code>____print(bar)</code>
 <br>
<code>#call func below, unthreaded, only put this in formatter</code>
<br>
<code>foo("bruh")</code>
<br>
<br>
After putting in formatter
<br>

<code>
def foo(bar):</code>
<br>
<code>. print(bar)</code>
 <br>
<code>#call func below, Threaded code</code>
<br>
<code>x = threading.Thread(target=foo("bruh")) 
</code>
<br>
<code>x.start()</code>
<br>
<code>x.join()</code>
<br>

<p>Now why might this be useful you ask. If you want to do large scale multiproccesing for a project, and dont want to  do the repetetive task of threading</p>
<p> Something I am working on and may post later is a python script that auto-threads a whole python file</p>
