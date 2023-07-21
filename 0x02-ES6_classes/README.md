# 0x02. ES6 classes

<img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230721%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230721T121115Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4958c25245964deb0839683af4aa1737a17de6d9c68ee9e8ee2ba678f1d9268e">

## Resources
<b>Read or watch:</b>

<li>
    <a href ="https://intranet.alxswe.com/rltoken/IDo2mlwrId8srxeBNEjftw">
        Classes
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/CQS69TtR8objrRABVPVNZA">
        Metaprogramming
    </a>
</li>

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

<li>How to define a Class</li>
<li>How to add methods to a class</li>
<li>Why and how to add a static method to a class</li>
<li>How to extend a class from another</li>
<li>Metaprogramming and symbols</li>

## Requirements



<ul>
    <li>Allowed editors: vi, vim, emacs, Visual Studio Code</li>
    <li>All your files will be interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)</li>
    <li>All your files should end with a new line</li>
    <li>A README.md file, at the root of the folder of the project, is mandatory</li>
    <li>Your code should use the js extension</li>
    <li>Your code will be tested using Jest and the command npm run test</li>
    <li>Your code will be verified against lint using ESLint</li>
    <li>Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test</li>
</ul>

## Setup

### Install NodeJS 12.11.x

(in your home directory):

<pre><code>
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

### Install Jest, Babel, and ESLint

in your project directory:

<li>Install Jest using:<span style="color: red; background-color: #E9E9E9;"> npm install --save-dev jest</span></li>
<li>Install Babel using: <span style="color: red; background-color: #E9E9E9;">npm install --save-dev babel-jest @babel/core @babel/preset-env</span></li>
<li>Install ESLint using: <span style="color: red; background-color: #E9E9E9;">npm install --save-dev eslint</span></li>

## Configuration Files

#### <a href="#packagejson" style="color: #E43F26; background-color: #E9E9E9;">package.json</a>

#### <a href="#babelconfigjs" style="color: #E43F26; background-color: #E9E9E9;">babel.config.js</a>

#### <a href="#eslintrcjs" style="color: #E43F26; background-color: #E9E9E9;">.eslintrc.js</a>

<br>

### And ...

Don’t forget to run <span style="color: red; background-color: #E9E9E9;">$ npm install</span> when you have the <span style="color: red; background-color: #E9E9E9;">package.json</span>
