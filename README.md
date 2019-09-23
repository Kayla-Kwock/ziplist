# ziplist

<ol>
  <li>
    <p>Start your timer.</p>
  </li>
  <li>
    <p>Create an empty GitHub repo called “ziplist” and clone it to your local computer. Don’t forget to check the box so that a README file is created.</p>
  </li>
  <li>
    <p>Create an IntelliJ “Static Web” project called “ziplist” within your local ziplist repo directory. If IntelliJ asks if you want to add a .gitignore file, you can say yes.</p>
  </li>
  <li>
    <p>Set up your project to use our <a href="reading-javascript-coding-standards.html">Javascript coding standards</a>. Once you have done the one time tasks, then all you should need to do is:</p>

    <ul>
      <li>Download <a href="/ics314f19/morea/coding-standards/sample.eslintrc">sample.eslintrc</a> into the project directory, and rename it to .eslintrc.</li>
      <li>Download <a href="/ics314f19/morea/coding-standards/sample.package.json">sample.package.json</a> into the project directory, and rename it to package.json.</li>
      <li>CD into the project directory, and run <code class="highlighter-rouge">npm install</code> to install ESLint.</li>
    </ul>
  </li>
  <li>
    <p>Create two files: index.html and ziplist.js. The index.html should load the Underscore package (available at <code class="highlighter-rouge">&lt;script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"&gt;&lt;/script&gt;</code>) followed by ziplist.js.  Note that the order of loading is important!</p>
  </li>
  <li>
    <p>Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore.  Now write a function called zipListTheSimpleWay that does the same thing using Underscore.</p>
  </li>
  <li>
    <p>Make sure that there is a green checkmark indicating that ESLint does not detect any problems with your code.</p>
  </li>
  <li>
    <p>Commit your finished program to GitHub.</p>
  </li>
  <li>
    <p>Check that your code is on GitHub.</p>
  </li>
  <li>
    <p>Stop your timer and record your time.  <em>Be sure to record it, because you will need your WOD time data when you write your technical essay.</em></p>
  </li>
</ol>
<p><span class="h4">
  <span style="padding: 2px" class="label label-success">Rx: &lt; 15 min</span>
  <span style="padding: 2px" class="label label-info">Av: 15-20 min</span>
  <span style="padding: 2px" class="label label-warning">Sd: 20-25 min</span>
  <span style="padding: 2px" class="label label-danger">DNF: 25+ min</span>
</span></p>
[See here for original document](http://courses.ics.hawaii.edu/ics314f19/morea/coding-standards/experience-five-problems-2.html)
